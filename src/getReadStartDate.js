import fs, { writeFileSync } from "fs";
import * as puppeteer from "puppeteer";
import bookList from "./bookList.json" with { type: "json" };

class MissingDateError extends Error {}
const maxRetries = 3;

const main = async () => {
  const userDataDir = "./puppeteerProfile";

  const browser = await puppeteer.launch({
    // headless: false,
    // slowMo: 100,
    userDataDir,
    args: ["--window-size=1280,800"],
    defaultViewport: {
      width: 1280,
      height: 800,
    },
  });

  let processed = 0;

  for (const book of bookList) {
    if (!book["Date Read"]) continue;
    //check for YYYY-MM-DD format if a book has already been processed
    if (/^\d{4}-\d{2}-\d{2}$/.test(book.readingData.started)) continue;

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

        // strip known newline characters from span with normalize-space(.)
        const dateDiv = await page.waitForSelector(
          "::-p-xpath(//span[normalize-space(.)='Started Reading']/parent::div)",
        );

        const fullDateText = await dateDiv.evaluate((el) =>
          el.textContent.trim(),
        );

        // Date comes out 'January 01, 2000'. Note endash character from goodreads format
        const splitDateText = fullDateText.split("–");

        const dateObj = new Date(splitDateText[0].trim());
        if (isNaN(dateObj)) {
          throw new MissingDateError(
            `Invalid date format for book ${book.Title} (date: ${splitDateText[0].trim()})`,
          );
        }
        const dateISO = dateObj.toISOString().split("T")[0];

        book.readingData[0].started = dateISO;

        // await page.close();

        // pause script here. Testing only
        // await new Promise(() => {});

        // break on success
        await page.close();
        // console.log(`writing book: ${book.bookID}`);
        processed++;
        console.log(processed);
        if (processed % 50 === 0) {
          writeFileSync(
            "./src/startDateDataUpdated.json",
            JSON.stringify(bookList, null, 2),
          );
          console.log(`Progress written at ${processed} books.`);
        }
        break;
      } catch (error) {
        if (error instanceof MissingDateError) {
          // skip retry for malformed dates - almost always because there is no start date present
          console.warn(`Skipping book ${book.Title}: ${error.message}`);
          break;
        }

        console.error(`Failed for book ${book["Book Id"]}:`, error.message);
        retries += 1;
        await new Promise((res) => setTimeout(res, 1000));
      }
    }
  }

  writeFileSync(
    "./src/startDateDataUpdated.json",
    JSON.stringify(bookList, null, 2),
  );
};

main();
