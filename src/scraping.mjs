// import axios from "axios";
// import cheerio from "cheerio";
import puppeteer from "puppeteer";
import fs from "fs";
import bookList from "./bookList.json" with { type: "json" };

// export async function scrapePageCheerio(bookID) {
//   const url = `https://www.goodreads.com/book/show/${bookID}`;

//   try {
//     // Fetch the HTML content of the page
//     const response = await axios.get(url);
//     const html = response.data;

//     // Load the HTML content into Cheerio
//     const $ = cheerio.load(html);

//     // Extract images
//     const images = [];
//     $("img.ResponsiveImage").each((index, element) => {
//       const imageUrl = $(element).attr("src");
//       images.push(imageUrl);
//     });

//     // array of image URLs for the current page
//     console.log(`Images on page ${bookID}:`, images);
//   } catch (error) {
//     console.error(`Error fetching or parsing page ${bookID}:`, error.message);
//   }
// }

// const url = "https://www.goodreads.com/book/show/45892276";

// const main = async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);

//   const images = await page.evaluate(() => {
//     const img = document.querySelector("img.ResponsiveImage");
//     return img.src;
//   });
//   console.log(images);
//   console.log("test");

//   // await page.screenshot({ path: "screenshot.png" });
//   await browser.close();
// };

// main();

// const url = "https://www.goodreads.com/book/show/45892276";
const IdToISBN = {};

for (let i = 0; i < bookList.length; i += 1) {
  const id = bookList[i]["Book Id"];
  const isbn = bookList[i].ISBN13;
  IdToISBN[id] = isbn;
}
console.log(IdToISBN);

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
  await fs.promises.writeFile(
    `src/scrapeCovers/${IdToISBN.bookID}.jpg`,
    imageBuffer,
  );
  await page.close();
  await pageNew.close();
  await browser.close();
};

main(61259096);
