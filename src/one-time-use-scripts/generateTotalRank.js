import { writeFileSync } from "fs";
import readList from "../readList.json" with { type: "json" };

let count = 1,
  count1 = 1,
  count2 = 1,
  count3 = 1,
  count4 = 1,
  count5 = 1;
for (const book of readList) {
  book.totalRanking = count;
  if (book.readingData.at(-1).rating === 1) {
    book.ratingRanking = count1;
    count1++;
  }
  if (book.readingData.at(-1).rating === 2) {
    book.ratingRanking = count2;
    count2++;
  }
  if (book.readingData.at(-1).rating === 3) {
    book.ratingRanking = count3;
    count3++;
  }
  if (book.readingData.at(-1).rating === 4) {
    book.ratingRanking = count4;
    count4++;
  }
  if (book.readingData.at(-1).rating === 5) {
    book.ratingRanking = count5;
    count5++;
  }
}

writeFileSync("src/testTotalRanks.json", JSON.stringify(readList, null, 2));
