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
/*!************************!*\
  !*** ./src/newBook.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAddedDate: () => (/* binding */ getAddedDate),
/* harmony export */   getAdditionalAuthors: () => (/* binding */ getAdditionalAuthors),
/* harmony export */   getAuthorInput: () => (/* binding */ getAuthorInput),
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3Qm9vay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTk87QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2stcmFua2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib29rLXJhbmtpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jvb2stcmFua2luZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jvb2stcmFua2luZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jvb2stcmFua2luZy8uL3NyYy9uZXdCb29rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGdldEdvb2RyZWFkc0lESW5wdXQoKSB7XHJcbiAgY29uc3QgSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvb2RyZWFkc0lEXCIpO1xyXG4gIHJldHVybiBJRC52YWx1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXV0aG9ySW5wdXQoKSB7XHJcbiAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3JcIik7XHJcbiAgcmV0dXJuIGF1dGhvci52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkZGl0aW9uYWxBdXRob3JzKCkge1xyXG4gIGNvbnN0IGF1dGhvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGl0aW9uYWxBdXRob3JzXCIpO1xyXG4gIGNvbnN0IGF1dGhvcnNBcnJheSA9IGF1dGhvcnMudmFsdWUuc3BsaXQoXCIsXCIpO1xyXG4gIHJldHVybiBhdXRob3JzQXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJU0JOKCkge1xyXG4gIGNvbnN0IElTQk4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIklTQk5cIik7XHJcbiAgcmV0dXJuIElTQk4udmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFyUmF0aW5nKCkge1xyXG4gIGNvbnN0IHJhdGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhclJhdGluZ1wiKTtcclxuICByZXR1cm4gcmF0aW5nLnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHVibGljUmF0aW5nKCkge1xyXG4gIGNvbnN0IHJhdGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHVibGljUmF0aW5nXCIpO1xyXG4gIHJldHVybiByYXRpbmcudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQdWJsaXNoZXIoKSB7XHJcbiAgY29uc3QgcHVibGlzaGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwdWJsaXNoZXJcIik7XHJcbiAgcmV0dXJuIHB1Ymxpc2hlci52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFllYXJQdWJsaXNoZWQoKSB7XHJcbiAgY29uc3QgeWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhclB1Ymxpc2hlZFwiKTtcclxuICByZXR1cm4geWVhci52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhZ2VzKCkge1xyXG4gIGNvbnN0IHBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKTtcclxuICByZXR1cm4gcGFnZXMudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmlnaW5hbFB1YmxpY2F0aW9uWWVhcigpIHtcclxuICBjb25zdCB5ZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmlnaW5hbFB1YmxpY2F0aW9ueWVhclwiKTtcclxuICByZXR1cm4geWVhci52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXJ0RGF0ZSgpIHtcclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlU3RhcnRlZFwiKTtcclxuICByZXR1cm4gZGF0ZS52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbmlzaERhdGUoKSB7XHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUZpbmlzaGVkXCIpO1xyXG4gIHJldHVybiBkYXRlLnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWRkZWREYXRlKCkge1xyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVBZGRlZFwiKTtcclxuICByZXR1cm4gZGF0ZS52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1hdCgpIHtcclxuICBjb25zdCBmb3JtYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1hdFwiKTtcclxuICByZXR1cm4gZm9ybWF0LnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVyZWFkKCkge1xyXG4gIGNvbnN0IHJlcmVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVyZWFkXCIpO1xyXG4gIGlmIChyZXJlYWQuY2hlY2tlZCkgcmV0dXJuIHRydWU7XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2VucmUoKSB7XHJcbiAgY29uc3QgZ2VucmVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5yZVRhZ3NcIik7XHJcbiAgY29uc3QgZ2VucmVBcnJheSA9IGdlbnJlVGFncy52YWx1ZS5zcGxpdChcIixcIik7XHJcbiAgcmV0dXJuIGdlbnJlQXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXZpZXcoKSB7XHJcbiAgY29uc3QgcmV2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXZpZXdcIik7XHJcbiAgcmV0dXJuIHJldmlldy52YWx1ZTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=