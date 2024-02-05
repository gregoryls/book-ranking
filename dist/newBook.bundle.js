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
/* harmony export */   getAdditionalAuthors: () => (/* binding */ getAdditionalAuthors),
/* harmony export */   getAuthorInput: () => (/* binding */ getAuthorInput),
/* harmony export */   getGoodreadsIDInput: () => (/* binding */ getGoodreadsIDInput),
/* harmony export */   getISBN: () => (/* binding */ getISBN),
/* harmony export */   getPublicRating: () => (/* binding */ getPublicRating),
/* harmony export */   getStarRating: () => (/* binding */ getStarRating)
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3Qm9vay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3IvLi9zcmMvbmV3Qm9vay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiBnZXRHb29kcmVhZHNJRElucHV0KCkge1xyXG4gIGNvbnN0IElEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb29kcmVhZHNJRFwiKTtcclxuICByZXR1cm4gSUQudmFsdWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEF1dGhvcklucHV0KCkge1xyXG4gIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yXCIpO1xyXG4gIHJldHVybiBhdXRob3IudmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBZGRpdGlvbmFsQXV0aG9ycygpIHtcclxuICBjb25zdCBhdXRob3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRpdGlvbmFsQXV0aG9yc1wiKTtcclxuICBjb25zdCBhdXRob3JzQXJyYXkgPSBhdXRob3JzLnZhbHVlLnNwbGl0KFwiLFwiKTtcclxuICByZXR1cm4gYXV0aG9yc0FycmF5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNCTigpIHtcclxuICBjb25zdCBJU0JOID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJJU0JOXCIpO1xyXG4gIHJldHVybiBJU0JOLnZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhclJhdGluZygpIHtcclxuICBjb25zdCByYXRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJSYXRpbmdcIik7XHJcbiAgcmV0dXJuIHJhdGluZy52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFB1YmxpY1JhdGluZygpIHtcclxuICBjb25zdCByYXRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB1YmxpY1JhdGluZ1wiKTtcclxuICByZXR1cm4gcmF0aW5nLnZhbHVlO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==