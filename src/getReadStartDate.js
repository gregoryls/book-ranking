import fs, { writeFileSync } from "fs";
import puppeteer from "puppeteer";
import bookList from "./bookList.json" with { type: "json" };

const maxRetries = 3;
// todo duplicate entries check

const main = async () => {
  const userDataDir = "./puppeteerProfile";

  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    userDataDir,
  });
  let retries = 0;

  // consider const page
  let page;

  while (retries < maxRetries) {
    try {
      let bookID;

      // foreach does not support async, so use discrete for...of loop
      for (const book of bookList) {
        if (book["Date Read"]) {
          bookID = book["Book Id"];
          console.log(bookID);

          const url = "https://www.goodreads.com/review/edit/" + bookID;
          page = await browser.newPage();
          await page.goto(url);

          // XPath to find link with 'Review' text content
          const [reviewLink] = await page.$x("//a[text()='Review']");
          await reviewLink.click();
          await page.waitForNavigation({ waitUntil: "networkidle0" });

          // If successful, break out of the loop
          // break;
        } else {
          // skip unread books
          continue;
        }
      }
    } catch (error) {
      console.error(error.message);
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
