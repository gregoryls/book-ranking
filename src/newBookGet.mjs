import fs from "fs";
import puppeteer from "puppeteer";
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
        const authors = Array.from(
          document.querySelectorAll(
            ".BookPageMetadataSection__contributor .ContributorLink__name",
          ),
        );
        return {
          Title:
            document
              .querySelector('[data-testid="bookTitle"')
              ?.textContent.trim() || "",
          Author: authors[0].textContent.trim(),
          "Additional Authors": authors.slice(1),
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
