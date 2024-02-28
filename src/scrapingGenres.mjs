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

  const genreElements = await page.$$eval(
    ".BookPageMetadataSection__genreButton a span",
    (elements) => elements.map((element) => element.textContent),
  );

  console.log(genreElements);
  //   await fs.promises.writeFile(
  //     `src/scrapeCovers/${IdToISBN[bookID]}.jpg`,
  //     imageBuffer,
  //   );
  await page.close();
  await browser.close();
};

main("49466517");
