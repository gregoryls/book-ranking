import puppeteer from "puppeteer";
import fs from "fs";
import bookList from "./bookList.json" with { type: "json" };

const maxRetries = 3;
// fix no audiobook tag

const main = async () => {
  for (let i = 1600; i < 1713; i += 1) {
    const bookID = bookList[i]["Book Id"];
    const url = "https://www.goodreads.com/book/show/" + bookID;

    let retries = 0;
    let genreElements;

    while (retries < maxRetries) {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      try {
        await page.goto(url);
        await page.waitForNetworkIdle();

        genreElements = await page.$$eval(
          ".BookPageMetadataSection__genreButton a span",
          (elements) => elements.map((element) => element.textContent),
        );
        console.log(`${i}/${bookList.length - 1}`);
        // If successful, break out of the loop
        break;
      } catch (error) {
        console.error(
          `Error fetching data for bookID ${bookID}: ${error.message}`,
        );
      } finally {
        await page.close();
        await browser.close();
      }

      // Increment retries and wait for a short time before the next attempt
      retries += 1;
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    // Update bookList with genreTags
    bookList[i].genreTags = genreElements;
  }

  const updatedBookList = JSON.stringify(bookList, null, 2);
  await fs.promises.writeFile("src/genreTest.json", updatedBookList);
};

main();
