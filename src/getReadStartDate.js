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

        const reviewLink = await page.waitForSelector(
          "::-p-xpath(//a[text()='Review'])",
        );
        await reviewLink.click();

        await page.waitForNavigation({ waitUntil: "networkidle0" });
        // await page.content();

        const spans = await page.$$eval("span", (els) =>
          els.map((el) => el.textContent.trim()),
        );
        console.log(spans);

        const dateDiv = await page.waitForSelector(
          "::-p-xpath(//span[text()='Started Reading']/parent::div)",
        );

        const dateText = await dateDiv.evaluate((el) => el.textContent.trim());
        console.log(dateText);

        // await page.close();

        // pause script here. Testing only
        await new Promise(() => {});

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
