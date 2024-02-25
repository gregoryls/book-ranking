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

const main = async (bookID) => {
  const url = "https://www.goodreads.com/book/show/" + bookID;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const image = await page.waitForSelector("img.ResponsiveImage");
  const imgURL = await image.evaluate((img) => img.getAttribute("src"));
  const pageNew = await browser.newPage();
  const response = await pageNew.goto(imgURL, {
    timeout: 0,
    waitUntil: "networkidle0",
  });
  const imageBuffer = await response.buffer();
  console.log(IdToISBN[bookID]);
  await fs.promises.writeFile(
    `src/scrapeCovers/${IdToISBN[bookID]}.jpg`,
    imageBuffer,
  );
  await page.close();
  await pageNew.close();
  await browser.close();
};

main("49466517");
