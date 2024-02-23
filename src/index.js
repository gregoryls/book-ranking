import "./style.css";

import Sortable from "sortablejs";

import bookList from "./bookList.json";

import * as utils from "./utils";

// TODO
// arrange dist images into a folder via webpack
// probably change list to grid
// look into sortableJS
// https://codepen.io/WebDevSimplified/pen/JjdveeV
// come back to custom sorting
// remove draggable property now with sortablejs?
// make isbn converter
// loop converter through booklist
// scrape images - 'img.ResponsiveImage' should hit covers
// 22604815, isbn doesn't exist
// if statement for null isbn image names
// update python script notes
// make isbnconversion into a discrete function.

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

// utils.dragAndDrop();
const bookListRender = document.getElementById("bookWrap");
// Sortable.create(bookListRender, {
//   animation: 150,
// });
// const order = Sortable.toArray();
// console.log(Sortable.sort(order, true));
function handleDrop(movedElement, newIndex, oldIndex) {
  // console.log(movedElement, newIndex, oldIndex);
  const bookListCounter = document.querySelectorAll(".bookListDisplay h3");
  for (let i = 0; i < bookListCounter.length; i += 1) {
    bookListCounter[i].textContent = i + 1;
  }
}

const sortable = new Sortable(bookListRender, {
  animation: 150,
  onEnd(evt) {
    const movedElement = evt.item;
    const { newIndex } = evt;
    const { oldIndex } = evt;
    handleDrop(movedElement, newIndex, oldIndex);
  },
});

// scraping.scrapePage(49466517);
