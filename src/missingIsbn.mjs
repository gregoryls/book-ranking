import puppeteer from "puppeteer";
import fs from "fs";
import bookList from "./bookList.json" with { type: "json" };

const url = "https://isbnsearch.org/";

const main = async (titleAuthorString) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  await page.waitForSelector("input.start");
  await page.type("input.start", titleAuthorString, { delay: 100 });
  const submitButton = await page.$("#searchSubmit");
  await submitButton.click();
  await page.waitForSelector(".bookinfo h2 a");

  const title = await page.$eval(".bookinfo h2 a", (element) =>
    element.textContent.trim(),
  );
  console.log(title);

  await browser.close();
};

main("crystal");
