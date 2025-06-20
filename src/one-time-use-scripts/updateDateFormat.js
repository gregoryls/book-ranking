import { writeFileSync } from "fs";
import bookList from "../bookList.json" with { type: "json" };

bookList.forEach((book) => {
  // if (book["Date Read"]) {
  //   const [y, m, d] = book["Date Read"].split("/");
  //   // convert to iso 8601 format
  //   book["Date Read"] = `${y}-${m}-${d}`;
  // }
  // if (book["Date Added"]) {
  //   const [y, m, d] = book["Date Added"].split("/");
  //   // convert to iso 8601 format
  //   book["Date Added"] = `${y}-${m}-${d}`;
  // }
  if (book.readingData[0].finished) {
    const [y, m, d] = book.readingData[0].finished.split("/");
    // convert to iso 8601 format
    book.readingData[0].finished = `${y}-${m}-${d}`;
  }
});

writeFileSync("src/testDateChange.json", JSON.stringify(bookList, null, 2));
