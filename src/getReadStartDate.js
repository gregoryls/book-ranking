import fs, { writeFileSync } from "fs";
import * as puppeteer from "puppeteer";
import bookList from "./bookList.json" with { type: "json" };

const maxRetries = 3;

const main = async () => {
  const userDataDir = "./puppeteerProfile";

  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    userDataDir,
  });
  let retries = 0;

  for (const book of bookList) {
    if (!book["Date Read"]) continue;

    let retries = 0;
    while (retries < maxRetries) {
      try {
        const bookID = book["Book Id"];
        const url = "https://www.goodreads.com/review/edit/" + bookID;

        const page = await browser.newPage();
        await page.goto(url);

        console.log("typeof page.$x:", typeof page.$x);
        const [reviewLink] = await page.$x("//a[text()='Review']");
        await reviewLink.click();
        await page.waitForNavigation({ waitUntil: "networkidle0" });

        // await page.close();

        // break on success
        // break;
      } catch (error) {
        console.error(`Failed for book ${book["Book Id"]}:`, error.message);
        retries += 1;
        await new Promise((res) => setTimeout(res, 1000));
      }
    }
  }
};

main();
