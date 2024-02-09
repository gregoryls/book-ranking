import "./style.css";
import bookList from "./bookList.json";
import * as utils from "./utils";

// TODO
// arrange dist images into a folder via webpack
// probably change list to grid
// look into sortableJS
// https://codepen.io/WebDevSimplified/pen/JjdveeV
//

console.log(bookList[0]);
const readBooks = [];
const rating1Books = [];
const rating2Books = [];
const rating3Books = [];
const rating4Books = [];
const rating5Books = [];

for (let i = 0; i < bookList.length; i += 1) {
  if (bookList[i]["Date Read"]) {
    readBooks.push(bookList[i]);
  }
  if (bookList[i]["My Rating"] === 1) {
    rating1Books.push(bookList[i]);
  }
  if (bookList[i]["My Rating"] === 2) {
    rating2Books.push(bookList[i]);
  }
  if (bookList[i]["My Rating"] === 3) {
    rating3Books.push(bookList[i]);
  }
  if (bookList[i]["My Rating"] === 4) {
    rating4Books.push(bookList[i]);
  }
  if (bookList[i]["My Rating"] === 5) {
    rating5Books.push(bookList[i]);
  }
}

console.log(readBooks);
console.log(rating1Books);
utils.renderBookList(rating1Books);

utils.dragAndDrop();
