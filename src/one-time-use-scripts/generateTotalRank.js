import { writeFileSync } from "fs";
import readList from "../readList.json" with { type: "json" };

let count1 = 0,
  count2 = 0,
  count3 = 0,
  count4 = 0,
  count5 = 0;
for (const book of readList) {
  if (book.readingData.at(-1).rating === 4) {
    console.log(4);
  }
}

// writeFileSync("src/testTotalRanks.json", JSON.stringify(bookList, null, 2));
