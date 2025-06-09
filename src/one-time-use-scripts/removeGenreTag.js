import { writeFileSync } from "fs";
import bookList from "../bookList.json" with { type: "json" };

const tagToDelete = "Audiobook";

bookList.forEach((book) => {
  if (Array.isArray(book.genreTags)) {
    book.genreTags = book.genreTags.filter((tag) => tag !== tagToDelete);
  }
});

writeFileSync("src/testRemoval.json", JSON.stringify(bookList, null, 2));
