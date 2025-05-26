import { writeFileSync } from "fs";
import bookList from "./bookList.json" with { type: "json" };

let i = 1;
bookList.forEach((book) => {
  if (!Object.hasOwn(book, "readingData")) {
    console.log("no readingData", i);
    i++;
  }
});

// writeFileSync("src/testUpdate.json", JSON.stringify(bookList, null, 2));
