import { writeFileSync } from "fs";
import bookList from "./bookList.json" with { type: "json" };

const tagToDelete = "Audiobook";

bookList.forEach((book) => {
  for (let i = 0; i < book.genreTags.length; i += 1) {
    if ((book.genreTags[i] = tagToDelete)) {
      book.genreTags = book.genreTags.splice(i, 1);
    }
  }

  writeFileSync("src/testRemoval.json", JSON.stringify(bookList, null, 2));
});
