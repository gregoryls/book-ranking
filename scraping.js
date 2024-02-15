// import axios from "axios";
// import cheerio from "cheerio";
import puppeteer from "puppeteer";

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

const url = "https://www.goodreads.com/book/show/45892276";

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const images = await page.evaluate(() => {
    const img = document.querySelector("img.ResponsiveImage");
    return img;
  });
  console.log(images);
};

main();
