import puppeteer from "puppeteer";
import fs from "fs";
import bookList from "./bookList.json" with { type: "json" };

const IdToISBN = {};

for (let i = 0; i < bookList.length; i += 1) {
  const id = bookList[i]["Book Id"];
  const isbn = bookList[i].ISBN13;
  IdToISBN[id] = isbn;

  // Use book title for missing isbn (usually webnovels with no valid isbn)
  if (isbn === null) IdToISBN[id] = bookList[i].Title;
}

const maxRetries = 3;

const main = async () => {
  let browser;
  try {
    // browser outside for loop to reuse same instance
    browser = await puppeteer.launch();

    for (let i = 150; i < 250; i += 1) {
      let page, pageNew;
      let retries = 0;
      const bookID = bookList[i]["Book Id"];

      while (retries < maxRetries) {
        try {
          const url = "https://www.goodreads.com/book/show/" + bookID;

          page = await browser.newPage();
          await page.goto(url);

          const image = await page.waitForSelector("img.ResponsiveImage");
          const imgURL = await image.evaluate((img) => img.getAttribute("src"));

          pageNew = await browser.newPage();
          const response = await pageNew.goto(imgURL, {
            timeout: 0,
            waitUntil: "networkidle0",
          });
          const imageBuffer = await response.buffer();

          await fs.promises.writeFile(
            `src/scrapeCovers/${IdToISBN[bookID]}.jpg`,
            imageBuffer,
          );

          console.log(`${i}/${bookList.length - 1}`);
          // Exit the loop if successful
          break;
        } catch (error) {
          console.error(`Error for bookID ${bookID}: ${error.message}`);
        } finally {
          // Close the pages
          if (page) await page.close();
          if (pageNew) await pageNew.close();
        }

        // Increment retries and wait for a short time before the next attempt
        retries += 1;
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  } catch (error) {
    console.error("Browser launch error:", error);
  } finally {
    // Close the browser instance
    if (browser) await browser.close();
  }
};

main();
