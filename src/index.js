import "./style.css";
import Sortable from "sortablejs";
import bookList from "./bookList.json";
import readList from "./readList.json";
import unreadList from "./unreadList.json";
import * as utils from "./utils.js";

// TODO
// loading = 'lazy'
// probably change list to grid
// https://codepen.io/WebDevSimplified/pen/JjdveeV
// come back to custom sorting
// remove draggable property now with sortablejs?
// isbn string to num node script
// investigate Promise.all method
// new book node module, update bookList with given goodreadsID
// may have a few covers with mismatched isbns...check visually?
// dump covers directly into dist?
// or host covers on some server
// look into dynamically loading images as user scrolls down page
// placeholder cover when one doesn't exist
// remove audiobook from genres

utils.renderBookList(readList);

// utils.dragAndDrop();
const bookListRender = document.getElementById("bookWrap");
// Sortable.create(bookListRender, {
//   animation: 150,
// });
// const order = Sortable.toArray();
// console.log(Sortable.sort(order, true));
function handleDrop(movedElement, newIndex, oldIndex) {
  // console.log(movedElement, newIndex, oldIndex);
  const totalRankCounter = document.querySelectorAll(".bookListDisplay h3");
  // only renumber impacted indexes
  const start = Math.min(oldIndex, newIndex);
  const end = Math.max(oldIndex, newIndex);

  for (let i = start; i <= end; i += 1) {
    // zero indexed, but ranking display is 1-indexed
    totalRankCounter[i].textContent = i + 1;
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
