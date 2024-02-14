import axios from "axios";
import cheerio from "cheerio";

import { Builder, By, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";

export async function scrapePageCheerio(bookID) {
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

export async function scrapePageSelenium(bookID) {
  const url = `https://www.goodreads.com/book/show/${bookID}`;

  // Set up the Chrome browser
  const options = new chrome.Options();
  // Add any necessary options, such as headless mode or specific user agent

  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  try {
    // Navigate to the URL
    await driver.get(url);

    // Wait for some element to be present before proceeding (adjust as needed)
    await driver.wait(
      until.elementLocated(By.css("img.ResponsiveImage")),
      10000,
    );

    // Extract images using standard Selenium WebDriver commands
    const images = await driver.findElements(By.css("img"));
    const imageUrls = await Promise.all(
      images.map(async (imgElement) => await imgElement.getAttribute("src")),
    );

    // You now have an array of image URLs for the current page
    console.log(`Images on page ${bookID}:`, imageUrls);
  } catch (error) {
    console.error(`Error scraping page ${bookID}:`, error.message);
  } finally {
    // Close the browser window
    await driver.quit();
  }
}
