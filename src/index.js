import "./style.css";
import bookList from "./bookList.json";
import * as utils from "./utils";

// TODO
// arrange dist images into a folder via webpack
// probably change list to grid

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

const container = document.getElementById("bookWrap");
let draggedElement;

container.addEventListener("dragstart", (event) => {
  draggedElement = event.target;
  // draggedElement.style.display = "none";
  event.dataTransfer.setData("text/plain", event.target.innerHTML);
});

container.addEventListener("dragover", (event) => {
  event.preventDefault();
  const boundingBox = draggedElement.getBoundingClientRect();

  if (event.clientY > boundingBox.bottom || event.clientY < boundingBox.top) {
    container.insertBefore(
      draggedElement,
      event.target.closest(".bookListDisplay"),
    );
  }
});

container.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");

  const newElement = document.createElement("div");
  newElement.className = "bookListDisplay";
  // newElement.style.display = "flex";
  newElement.innerHTML = data;

  const targetElement = event.target.closest(".book");

  if (targetElement) {
    container.insertBefore(newElement, targetElement);
  } else {
    container.appendChild(newElement);
  }
});
