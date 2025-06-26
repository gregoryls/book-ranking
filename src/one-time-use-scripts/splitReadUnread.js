import { writeFileSync } from "fs";
import bookList from "../bookList.json" with { type: "json" };

const readList = [];
const unreadList = [];
for (const book of bookList) {
  if (book.readingData[0].finished) {
    readList.push(book);
  } else {
    unreadList.push(book);
  }
}

writeFileSync("src/unreadList.json", JSON.stringify(unreadList, null, 2));
writeFileSync("src/readList.json", JSON.stringify(readList, null, 2));
