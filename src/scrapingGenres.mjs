import puppeteer from "puppeteer";
import fs from "fs";
import bookList from "./bookList.json" with { type: "json" };
import { generateKey } from "crypto";

const main = async (bookID) => {
  const url = "https://www.goodreads.com/book/show/" + bookID;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  await page.waitForNetworkIdle();

  const genreElements = await page.waitForSelector(
    ".BookPageMetadataSection__genreButton a span",
  );

  const test = await genreElements.evaluate((element) =>
    element.getAttribute("textContent"),
  );
  console.log(test);
  //   await fs.promises.writeFile(
  //     `src/scrapeCovers/${IdToISBN[bookID]}.jpg`,
  //     imageBuffer,
  //   );
  await page.close();
  await browser.close();
};

main("49466517");
