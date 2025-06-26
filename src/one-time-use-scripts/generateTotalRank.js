import { writeFileSync } from "fs";
import bookList from "../bookList.json" with { type: "json" };

for (const book of bookList) {
}
// manually fix unread mistakes, abercrombie 2017?
writeFileSync("src/testTotalRanks.json", JSON.stringify(bookList, null, 2));
