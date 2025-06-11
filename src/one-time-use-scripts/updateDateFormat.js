import { writeFileSync } from "fs";
import bookList from "../bookList.json" with { type: "json" };

bookList.forEach((book) => {
  if (book["Date Read"]) {
    const [y1, m1, d1] = book["Date Read"].split("/");
    // convert to iso 8601 format
    book["Date Read"] = `${y1}-${m1}-${d1}`;
  }
});

// writeFileSync("src/testreadingData.json", JSON.stringify(bookList, null, 2));
