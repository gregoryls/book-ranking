import fs, { writeFileSync } from "fs";
import * as puppeteer from "puppeteer";
import bookList from "./bookList.json" with { type: "json" };

// disney 2 gettable
// maybe 7 1/2 deaths
// add unknown for missing dates
// 53152636, 421861, 36337550, 2295534

const maxRetries = 3;

const main = async () => {
  const userDataDir = "./puppeteerProfile";

  const browser = await puppeteer.launch({
    headless: false,
    userDataDir,
  });

  let processed = 0;
  let page;

  for (const book of bookList) {
    if (!book["Date Read"]) continue;
    //check for YYYY-MM-DD format if a book has already been processed
    if (/^\d{4}-\d{2}-\d{2}$/.test(book.readingData[0].started)) continue;

    //skip processed, but missing data
    if (book.readingData[0].started === "unknown") continue;

    let retries = 0;
    let page;

    while (retries < maxRetries) {
      try {
        const bookID = book["Book Id"];
        const url = "https://www.goodreads.com/review/edit/" + bookID;

        page = await browser.newPage();
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

        // separate logic for unkown/malformed dates, otherwise breaks on ISO
        if (isNaN(dateObj)) {
          book.readingData[0].started = "unknown";
          console.log(`Writing unknown for ${book.Title}`);

          await page.close();

          // batch file writing into groups of 50 to save partial progress
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
        }

        const dateISO = dateObj.toISOString().split("T")[0];

        // separate logic for assigning books that exist, but have no start date

        book.readingData[0].started = dateISO;

        // pause script here. Testing only
        // await new Promise(() => {});

        // break on success
        await page.close();

        // batch file writing into groups of 50 to save partial progress
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
        console.error(`Failed for book ${book["Book Id"]}:`, error.message);
        retries += 1;
        await page.close();
        await new Promise((res) => setTimeout(res, 1000));
      }
    }
  }

  writeFileSync(
    "./src/startDateDataUpdated.json",
    JSON.stringify(bookList, null, 2),
  );
  console.log("script complete");
  await browser.close();
};

main();
