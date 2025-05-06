import fs from "fs";
import puppeteer from "puppeteer";
import isbn10ToIsbn13 from "./isbnConversion";
import bookList from "./bookList.json" with { type: "json" };

maxRetries = 3;
const newBook = {};

const main = async () => {
  let browser;

  browser = await puppeteer.launch();
  let retries = 0;

  // consider const page
  let page;

  const bookID = 36578942;

  while (retries < maxRetries) {
    try {
      const url = "https://www.goodreads.com/book/show/" + bookID;
      page = await browser.newPage();
      await page.goto(url);
      await page.waitForNetworkIdle();

      // use evaluate to only query the page once instead of multiple $eval calls
      const bookData = await page.evaluate(() => {
        // goodreads structured data
        const scrapeJSON = JSON.parse(
          document.querySelector('script[type="application/ld+json"]')
            .textContent,
        );
        //convert to array from nodelist
        const authors = Array.from(
          document.querySelectorAll(
            ".BookPageMetadataSection__contributor .ContributorLink__name",
          ),
        );
        // filter Boolean in case scraping site has issues
        const authorsText = authors
          .map((author) => author.textContent.trim())
          .filter(Boolean);

        return {
          Title:
            document
              .querySelector('[data-testid="bookTitle"')
              ?.textContent.trim() || "",
          Author: authorsText[0] || "",
          // additional authors in comma separated string to match booklist format
          "Additional Authors":
            authorsText.length > 1 ? authorsText.slice(1).join(", ") : "",
        };
      });
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
