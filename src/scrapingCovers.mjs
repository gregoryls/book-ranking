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
  for (let i = 15; i < 30; i += 1) {
    let browser, page, pageNew;
    let retries = 0;
    const bookID = bookList[i]["Book Id"];

    while (retries < maxRetries) {
      try {
        const url = "https://www.goodreads.com/book/show/" + bookID;

        browser = await puppeteer.launch();
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
        // Close the pages and browser if they exist
        if (page) await page.close();
        if (pageNew) await pageNew.close();
        if (browser) await browser.close();
      }

      // Increment retries and wait for a short time before the next attempt
      retries += 1;
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
};

main();
