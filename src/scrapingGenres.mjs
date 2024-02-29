import puppeteer from "puppeteer";
import fs from "fs";
import bookList from "./bookList.json" with { type: "json" };

// let genreElements;

const main = async () => {
  for (let i = 0; i < 2; i += 1) {
    const bookID = bookList[i]["Book Id"];
    const url = "https://www.goodreads.com/book/show/" + bookID;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    await page.waitForNetworkIdle();

    const genreElements = await page.$$eval(
      ".BookPageMetadataSection__genreButton a span",
      (elements) => elements.map((element) => element.textContent),
    );

    // console.log(genreElements);
    bookList[i].genreTags = genreElements;
    console.log(bookList[i]);

    //   await fs.promises.writeFile(
    //     `src/scrapeCovers/${IdToISBN[bookID]}.jpg`,
    //     imageBuffer,
    //   );
    await page.close();
    await browser.close();
  }
};

main();
