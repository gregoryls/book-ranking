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

      // title
      const title = await page.$eval('[data-testid="bookTitle"]', (title) =>
        title.textContent.trim(),
      );
      newbook["Title"] = title;
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
