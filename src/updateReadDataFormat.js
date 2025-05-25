import { writeFileSync } from "fs";
import bookList from "./bookList.json" with { type: "json" };

bookList.forEach((book) => {});

writeFileSync("src/testUpdate.json", JSON.stringify(bookList, null, 2));
