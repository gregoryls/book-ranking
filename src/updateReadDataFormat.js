import { writeFileSync } from "fs";
import bookList from "./bookList.json" with { type: "json" };

bookList.forEach((book) => {
  if (!Object.hasOwn(book, "readingData")) {
    book.readingData = [
      {
        started: "",
        finished: book["Date Read"] || "",
        format: "",
        rating: book["My Rating"] || "",
        review: "",
      },
    ];
  }
});

writeFileSync("src/testreadingData.json", JSON.stringify(bookList, null, 2));
