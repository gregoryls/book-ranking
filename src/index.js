import bookList from "./bookList.json";

console.log(bookList[0]);
const readBooks = [];

for (let i = 0; i < bookList.length; i += 1) {
  if (bookList[i]["Date Read"]) {
    readBooks.push(bookList[i]);
  }
  //   console.log(bookList[i]["Date Read"]);
}

console.log(readBooks);
