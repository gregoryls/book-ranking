/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/newBookTools.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAddedDate: () => (/* binding */ getAddedDate),
/* harmony export */   getAdditionalAuthors: () => (/* binding */ getAdditionalAuthors),
/* harmony export */   getAuthorInput: () => (/* binding */ getAuthorInput),
/* harmony export */   getBookCover: () => (/* binding */ getBookCover),
/* harmony export */   getFinishDate: () => (/* binding */ getFinishDate),
/* harmony export */   getFormat: () => (/* binding */ getFormat),
/* harmony export */   getGenre: () => (/* binding */ getGenre),
/* harmony export */   getGoodreadsIDInput: () => (/* binding */ getGoodreadsIDInput),
/* harmony export */   getISBN: () => (/* binding */ getISBN),
/* harmony export */   getOriginalPublicationYear: () => (/* binding */ getOriginalPublicationYear),
/* harmony export */   getPages: () => (/* binding */ getPages),
/* harmony export */   getPublicRating: () => (/* binding */ getPublicRating),
/* harmony export */   getPublisher: () => (/* binding */ getPublisher),
/* harmony export */   getReread: () => (/* binding */ getReread),
/* harmony export */   getReview: () => (/* binding */ getReview),
/* harmony export */   getStarRating: () => (/* binding */ getStarRating),
/* harmony export */   getStartDate: () => (/* binding */ getStartDate),
/* harmony export */   getYearPublished: () => (/* binding */ getYearPublished)
/* harmony export */ });
function getGoodreadsIDInput() {
  const ID = document.getElementById("goodreadsID");
  return ID.value;
}
function getAuthorInput() {
  const author = document.getElementById("author");
  return author.value;
}

function getAdditionalAuthors() {
  const authors = document.getElementById("additionalAuthors");
  const authorsArray = authors.value.split(",");
  return authorsArray;
}

function getISBN() {
  const ISBN = document.getElementById("ISBN");
  return ISBN.value;
}

function getStarRating() {
  const rating = document.getElementById("starRating");
  return rating.value;
}

function getPublicRating() {
  const rating = document.getElementById("publicRating");
  return rating.value;
}

function getPublisher() {
  const publisher = document.getElementById("publisher");
  return publisher.value;
}

function getYearPublished() {
  const year = document.getElementById("yearPublished");
  return year.value;
}

function getPages() {
  const pages = document.getElementById("pages");
  return pages.value;
}

function getOriginalPublicationYear() {
  const year = document.getElementById("originalPublicationyear");
  return year.value;
}

function getStartDate() {
  const date = document.getElementById("dateStarted");
  return date.value;
}

function getFinishDate() {
  const date = document.getElementById("dateFinished");
  return date.value;
}

function getAddedDate() {
  const date = document.getElementById("dateAdded");
  return date.value;
}

function getFormat() {
  const format = document.getElementById("format");
  return format.value;
}

function getReread() {
  const reread = document.getElementById("reread");
  if (reread.checked) return true;
  return false;
}

function getGenre() {
  const genreTags = document.getElementById("genreTags");
  const genreArray = genreTags.value.split(",");
  return genreArray;
}

function getReview() {
  const review = document.getElementById("review");
  return review.value;
}

function getBookCover() {
  const cover = document.getElementById("bookCoverInput").files[0];
  return cover;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3Qm9vay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9vay1yYW5raW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jvb2stcmFua2luZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYm9vay1yYW5raW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9vay1yYW5raW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYm9vay1yYW5raW5nLy4vc3JjL25ld0Jvb2tUb29scy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiBnZXRHb29kcmVhZHNJRElucHV0KCkge1xyXG4gIGNvbnN0IElEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb29kcmVhZHNJRFwiKTtcclxuICByZXR1cm4gSUQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEF1dGhvcklucHV0KCkge1xyXG4gIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yXCIpO1xyXG4gIHJldHVybiBhdXRob3IudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBZGRpdGlvbmFsQXV0aG9ycygpIHtcclxuICBjb25zdCBhdXRob3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRpdGlvbmFsQXV0aG9yc1wiKTtcclxuICBjb25zdCBhdXRob3JzQXJyYXkgPSBhdXRob3JzLnZhbHVlLnNwbGl0KFwiLFwiKTtcclxuICByZXR1cm4gYXV0aG9yc0FycmF5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNCTigpIHtcclxuICBjb25zdCBJU0JOID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJJU0JOXCIpO1xyXG4gIHJldHVybiBJU0JOLnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhclJhdGluZygpIHtcclxuICBjb25zdCByYXRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJSYXRpbmdcIik7XHJcbiAgcmV0dXJuIHJhdGluZy52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFB1YmxpY1JhdGluZygpIHtcclxuICBjb25zdCByYXRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB1YmxpY1JhdGluZ1wiKTtcclxuICByZXR1cm4gcmF0aW5nLnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHVibGlzaGVyKCkge1xyXG4gIGNvbnN0IHB1Ymxpc2hlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHVibGlzaGVyXCIpO1xyXG4gIHJldHVybiBwdWJsaXNoZXIudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRZZWFyUHVibGlzaGVkKCkge1xyXG4gIGNvbnN0IHllYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJQdWJsaXNoZWRcIik7XHJcbiAgcmV0dXJuIHllYXIudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWdlcygpIHtcclxuICBjb25zdCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXNcIik7XHJcbiAgcmV0dXJuIHBhZ2VzLnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZ2luYWxQdWJsaWNhdGlvblllYXIoKSB7XHJcbiAgY29uc3QgeWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JpZ2luYWxQdWJsaWNhdGlvbnllYXJcIik7XHJcbiAgcmV0dXJuIHllYXIudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFydERhdGUoKSB7XHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVN0YXJ0ZWRcIik7XHJcbiAgcmV0dXJuIGRhdGUudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaW5pc2hEYXRlKCkge1xyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVGaW5pc2hlZFwiKTtcclxuICByZXR1cm4gZGF0ZS52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkZGVkRGF0ZSgpIHtcclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlQWRkZWRcIik7XHJcbiAgcmV0dXJuIGRhdGUudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtYXQoKSB7XHJcbiAgY29uc3QgZm9ybWF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtYXRcIik7XHJcbiAgcmV0dXJuIGZvcm1hdC52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlcmVhZCgpIHtcclxuICBjb25zdCByZXJlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcmVhZFwiKTtcclxuICBpZiAocmVyZWFkLmNoZWNrZWQpIHJldHVybiB0cnVlO1xyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdlbnJlKCkge1xyXG4gIGNvbnN0IGdlbnJlVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VucmVUYWdzXCIpO1xyXG4gIGNvbnN0IGdlbnJlQXJyYXkgPSBnZW5yZVRhZ3MudmFsdWUuc3BsaXQoXCIsXCIpO1xyXG4gIHJldHVybiBnZW5yZUFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmV2aWV3KCkge1xyXG4gIGNvbnN0IHJldmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmV2aWV3XCIpO1xyXG4gIHJldHVybiByZXZpZXcudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCb29rQ292ZXIoKSB7XHJcbiAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2tDb3ZlcklucHV0XCIpLmZpbGVzWzBdO1xyXG4gIHJldHVybiBjb3ZlcjtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=