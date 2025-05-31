import fs, { writeFileSync } from "fs";
import puppeteer from "puppeteer";
import bookList from "./bookList.json" with { type: "json" };

const maxRetries = 3;
// todo duplicate entries check

const main = async () => {
  let browser;

  browser = await puppeteer.launch();
  let retries = 0;

  // consider const page
  let page;

  while (retries < maxRetries) {
    try {
      let bookID;
      bookList.forEach((book) => {
        if (book["Date Read"]) bookID = book["Book Id"];
      });

      const url = "https://www.goodreads.com/review/show/" + bookID;
      page = await browser.newPage();
      await page.goto(url);
      await page.content();

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
