import { writeFileSync } from "fs";
import bookList from "../bookList.json" with { type: "json" };

bookList.forEach((book) => {
  if (book["Date Read"]) {
  }
});

// writeFileSync("src/testreadingData.json", JSON.stringify(bookList, null, 2));
