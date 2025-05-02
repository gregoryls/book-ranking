import fs from "fs";
import puppeteer from "puppeteer";
import bookList from "./bookList.json" with { type: "json" };

maxRetries = 3;

const main = async () => {
  let browser;

  browser = await puppeteer.launch();
  let retries = 0;

  // consider const page
  let page;

  const bookID = 36578942;

  while (retries < maxRetries) {
    try {
      const url = "https://www.goodreads.com/book/show/" + bookID;
      page = await browser.newPage();
      await page.goto(url);
    } finally {
      await page.close();
      await browser.close();
    }
  }
};
