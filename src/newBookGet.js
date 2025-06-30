import { writeFileSync } from "fs";
import puppeteer from "puppeteer";
import isbn10ToIsbn13 from "./isbnConversion.js";
import readList from "./readList.json" with { type: "json" };
import unreadList from "./unreadList.json" with { type: "json" };
import testList from "./test.json" with { type: "json" };

class DuplicateEntryError extends Error {
  constructor(bookID) {
    // error message
    super(`Duplicate entry detected with ID: ${bookID}`);
    // Error.name should be automatic, this is here for best practice
    this.name = "DuplicateEntryError";
  }
}
const maxRetries = 3;
// todo
// get book cover

function normalizeISBN(isbn) {
  if (isbn === "") return "";
  return isbn.length === 10 ? isbn10ToIsbn13(isbn) : isbn;
}

function checkForDuplicate(ID, list) {
  for (const book of list) {
    if (book["Book Id"] === ID) {
      throw new DuplicateEntryError(ID);
    }
  }
}
const main = async () => {
  const bookID = 6186357;
  checkForDuplicate(bookID, readList);
  checkForDuplicate(bookID, unreadList);

  let browser;

  browser = await puppeteer.launch({ headless: false, slowMo: 100 });
  let retries = 0;

  let page;

  while (retries < maxRetries) {
    try {
      const url = "https://www.goodreads.com/book/show/" + bookID;
      page = await browser.newPage();
      await page.goto(url);
      await page.waitForNetworkIdle();
      await page.content();

      // await page.waitForSelector('script[type="application/ld+json"]');

      // testing
      // const html = await page.content();
      // writeFileSync("debug-page.html", html);

      // testing

      // use evaluate to only query the page once instead of multiple $eval calls
      const newBook = await page.evaluate(() => {
        // goodreads structured data
        const scriptTag = document.querySelector(
          'script[type="application/ld+json"]',
        );
        console.log(scriptTag?.textContent);
        const scrapeJSON = scriptTag ? JSON.parse(scriptTag.textContent) : {};

        //convert to array from nodelist
        const authors = Array.from(
          document.querySelectorAll(
            ".BookPageMetadataSection__contributor .ContributorLink__name",
          ),
        );
        // filter Boolean in case site has issues
        const authorsText = authors
          .map((author) => author.textContent.trim())
          .filter(Boolean);

        const genreElements = Array.from(
          document.querySelectorAll(
            ".BookPageMetadataSection__genreButton a span",
          ),
        );
        const genreText = genreElements
          .map((genre) => genre.textContent.trim())
          .filter((genre) => genre && genre !== "Audiobook");

        // optional chaining to check for good element, then regex
        // match to find the four digits of a year.
        // text source usually reads, "First Published Januray 1, 1900"
        const publicationText =
          document.querySelector('[data-testid="publicationInfo"]')
            ?.textContent || "";
        const yearMatch = publicationText.match(/\b\d{4}\b/);

        return {
          Title:
            document
              .querySelector('[data-testid="bookTitle"]')
              ?.textContent.trim() || "",
          Author: authorsText[0] || "",
          // additional authors in comma separated string to match bookList format
          "Additional Authors":
            authorsText.length > 1 ? authorsText.slice(1).join(", ") : "",
          ISBN13: scrapeJSON.isbn || "",
          imageURL: scrapeJSON.image || "",

          // average rating data source comes in as a number
          // optional chaining to account for missing rating data
          "Average Rating":
            scrapeJSON.aggregateRating?.ratingValue?.toString() || "",
          "Original Publication Year": yearMatch ? yearMatch[0] : "",

          genreTags: genreText || "",
          totalRanking: "",
          "Date Added": "",
          readingData: [
            {
              started: "",
              finished: "",
              format: "",
              rating: "",
              review: "",
            },
          ],
        };
      });

      // normalize outside evaluate() due to limited scope inside the browser
      newBook.ISBN13 = normalizeISBN(newBook.ISBN13);

      if (newBook.imageURL) {
        const response = await fetch(newBook.imageURL);
        const buffer = Buffer.from(await response.arrayBuffer());
        // mixing writeFile and sync below for no real reason other than to leave the example here
        await writeFile(`./src/covers/${newBook.ISBN13}.jpg`, buffer);
      }

      // bookList.push(newBook);
      testList.push(newBook);
      writeFileSync("./src/test.json", JSON.stringify(testList, null, 2));
      // If successful, break out of the loop
      break;
    } catch (error) {
      console.error(
        `Error fetching data for bookID ${bookID}: ${error.message}`,
      );
    } finally {
      await page.close();
      await browser.close();
    }

    // Increment retries and wait for a short time before the next attempt
    retries += 1;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

main();
