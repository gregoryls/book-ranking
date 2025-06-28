import { writeFileSync } from "fs";
import readList from "../readList.json" with { type: "json" };

let count1 = 1,
  count2 = 1,
  count3 = 1,
  count4 = 1,
  count5 = 1;
for (const book of readList) {
  if (book.readingData.at(-1).rating === 1) {
    book.totalRanking = count1;
    count1++;
  }
  if (book.readingData.at(-1).rating === 2) {
    book.totalRanking = count2;
    count2++;
  }
  if (book.readingData.at(-1).rating === 3) {
    book.totalRanking = count3;
    count3++;
  }
  if (book.readingData.at(-1).rating === 4) {
    book.totalRanking = count4;
    count4++;
  }
  if (book.readingData.at(-1).rating === 5) {
    book.totalRanking = count5;
    count5++;
  }
}

writeFileSync("src/testTotalRanks.json", JSON.stringify(bookList, null, 2));
