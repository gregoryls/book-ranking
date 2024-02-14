import axios from "axios";
import cheerio from "cheerio";

export async function scrapePage(bookID) {
  const url = `https://www.goodreads.com/book/show/${bookID}`;

  try {
    // Fetch the HTML content of the page
    const response = await axios.get(url);
    const html = response.data;

    // Load the HTML content into Cheerio
    const $ = cheerio.load(html);

    // Extract images
    const images = [];
    $("img.ResponsiveImage").each((index, element) => {
      const imageUrl = $(element).attr("src");
      images.push(imageUrl);
    });

    // array of image URLs for the current page
    console.log(`Images on page ${bookID}:`, images);
  } catch (error) {
    console.error(`Error fetching or parsing page ${bookID}:`, error.message);
  }
}

export function placeholder() {
  console.log("test");
}
