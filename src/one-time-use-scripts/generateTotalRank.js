import { writeFileSync } from "fs";
import readList from "../readList.json" with { type: "json" };

for (const book of readList) {
}

writeFileSync("src/testTotalRanks.json", JSON.stringify(bookList, null, 2));
