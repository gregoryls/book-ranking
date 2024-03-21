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
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dragAndDrop: () => (/* binding */ dragAndDrop),
/* harmony export */   renderBookList: () => (/* binding */ renderBookList)
/* harmony export */ });
function importAll(r) {
  const images = {};
  // enclosing bracket around return to avoid ambiguous assignment in a return
  r.keys().forEach((key) => {
    // remove leading ./ from file names
    const temp = key.replace("./", "");
    // or option fix case where lastIndexOf === -1
    // remove trailing file extensions from file names (e.g. .png)
    const temp2 = temp.substr(0, temp.lastIndexOf(".")) || temp;
    images[temp2] = r(key);
  });
  // alternate map method
  // r.keys().map((item, index) => {
  //   images[item.replace("./", "")] = r(item);
  // });
  return images;
}

const covers = importAll(
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
);

function renderBookList(bookList) {
  console.log(covers);
  const bookWrap = document.getElementById("bookWrap");
  for (let i = 0; i < bookList.length; i += 1) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const authorP = document.createElement("p");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");

    div.classList.add("bookListDisplay");
    div.draggable = true;
    h3.textContent = i + 1;

    // most books have an ISBN13 and the cover is stored with that as a filename
    img.src = covers[bookList[i].ISBN13];
    // Alternative filename uses book title instead when ISBN13 is missing
    if (covers[bookList[i].ISBN13] === undefined)
      img.src = covers[bookList[i].Title];

    img.classList.add("bookCover");
    p.textContent = bookList[i].Title;
    authorP.textContent = bookList[i].Author;
    div.append(h3, img, p, authorP);
    bookWrap.append(div);
  }
}

// export function getNewBookInputs() {
//   const goodreadsID = document.getElementById("goodreadsID").value;
//   console.log(goodreadsID);
// }

function dragAndDrop() {
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

    const bookListCounter = document.querySelectorAll(".bookListDisplay h3");
    for (let i = 0; i < bookListCounter.length; i += 1) {
      bookListCounter[i].textContent = i + 1;
    }
  });
}

// export function dragAndDropTesting() {
//   const bookList = document.getElementById("bookWrap");
//   const books = document.querySelectorAll(".bookListDisplay");

//   let currentBook;
//   const coordinates = [];
//   let currentIndex;

//   for (let i = 0; i < books.length; i += 1) {
//     const book = books[i];

//     book.addEventListener("dragstart", function () {
//       currentBook = this;
//       currentIndex = i;
//       setTimeout(() => {
//         book.style.display = "none";
//       }, 0);
//     });

//     book.addEventListener("dragend", () => {
//       setTimeout(() => {
//         currentBook.style.display = "flex";
//         currentBook = null;
//       }, 0);
//     });

//     book.addEventListener("dragover", (e) => {
//       e.preventDefault();
//     });

//     book.addEventListener("dragenter", (e) => {
//       coordinates[i] = e.clientY;
//       // console.log(coordinates);
//     });

//     book.addEventListener("drop", function (e) {
//       if (currentBook !== this) {
//         const direction = coordinates[currentIndex] < e.clientY ? 1 : -1;
//         bookList.insertBefore(
//           currentBook,
//           direction === 1 ? this.nextSibling : this,
//         );
//       }
//     });
//   }
// }

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0lBQXdEO0FBQzFEO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2stcmFua2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib29rLXJhbmtpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jvb2stcmFua2luZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jvb2stcmFua2luZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jvb2stcmFua2luZy8uL3NyYy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XHJcbiAgY29uc3QgaW1hZ2VzID0ge307XHJcbiAgLy8gZW5jbG9zaW5nIGJyYWNrZXQgYXJvdW5kIHJldHVybiB0byBhdm9pZCBhbWJpZ3VvdXMgYXNzaWdubWVudCBpbiBhIHJldHVyblxyXG4gIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgLy8gcmVtb3ZlIGxlYWRpbmcgLi8gZnJvbSBmaWxlIG5hbWVzXHJcbiAgICBjb25zdCB0ZW1wID0ga2V5LnJlcGxhY2UoXCIuL1wiLCBcIlwiKTtcclxuICAgIC8vIG9yIG9wdGlvbiBmaXggY2FzZSB3aGVyZSBsYXN0SW5kZXhPZiA9PT0gLTFcclxuICAgIC8vIHJlbW92ZSB0cmFpbGluZyBmaWxlIGV4dGVuc2lvbnMgZnJvbSBmaWxlIG5hbWVzIChlLmcuIC5wbmcpXHJcbiAgICBjb25zdCB0ZW1wMiA9IHRlbXAuc3Vic3RyKDAsIHRlbXAubGFzdEluZGV4T2YoXCIuXCIpKSB8fCB0ZW1wO1xyXG4gICAgaW1hZ2VzW3RlbXAyXSA9IHIoa2V5KTtcclxuICB9KTtcclxuICAvLyBhbHRlcm5hdGUgbWFwIG1ldGhvZFxyXG4gIC8vIHIua2V5cygpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAvLyAgIGltYWdlc1tpdGVtLnJlcGxhY2UoXCIuL1wiLCBcIlwiKV0gPSByKGl0ZW0pO1xyXG4gIC8vIH0pO1xyXG4gIHJldHVybiBpbWFnZXM7XHJcbn1cclxuXHJcbmNvbnN0IGNvdmVycyA9IGltcG9ydEFsbChcclxuICByZXF1aXJlLmNvbnRleHQoXCIuL2NvdmVyc1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSxcclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb29rTGlzdChib29rTGlzdCkge1xyXG4gIGNvbnNvbGUubG9nKGNvdmVycyk7XHJcbiAgY29uc3QgYm9va1dyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2tXcmFwXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9va0xpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBhdXRob3JQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblxyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJib29rTGlzdERpc3BsYXlcIik7XHJcbiAgICBkaXYuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIGgzLnRleHRDb250ZW50ID0gaSArIDE7XHJcblxyXG4gICAgLy8gbW9zdCBib29rcyBoYXZlIGFuIElTQk4xMyBhbmQgdGhlIGNvdmVyIGlzIHN0b3JlZCB3aXRoIHRoYXQgYXMgYSBmaWxlbmFtZVxyXG4gICAgaW1nLnNyYyA9IGNvdmVyc1tib29rTGlzdFtpXS5JU0JOMTNdO1xyXG4gICAgLy8gQWx0ZXJuYXRpdmUgZmlsZW5hbWUgdXNlcyBib29rIHRpdGxlIGluc3RlYWQgd2hlbiBJU0JOMTMgaXMgbWlzc2luZ1xyXG4gICAgaWYgKGNvdmVyc1tib29rTGlzdFtpXS5JU0JOMTNdID09PSB1bmRlZmluZWQpXHJcbiAgICAgIGltZy5zcmMgPSBjb3ZlcnNbYm9va0xpc3RbaV0uVGl0bGVdO1xyXG5cclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiYm9va0NvdmVyXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IGJvb2tMaXN0W2ldLlRpdGxlO1xyXG4gICAgYXV0aG9yUC50ZXh0Q29udGVudCA9IGJvb2tMaXN0W2ldLkF1dGhvcjtcclxuICAgIGRpdi5hcHBlbmQoaDMsIGltZywgcCwgYXV0aG9yUCk7XHJcbiAgICBib29rV3JhcC5hcHBlbmQoZGl2KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXROZXdCb29rSW5wdXRzKCkge1xyXG4vLyAgIGNvbnN0IGdvb2RyZWFkc0lEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb29kcmVhZHNJRFwiKS52YWx1ZTtcclxuLy8gICBjb25zb2xlLmxvZyhnb29kcmVhZHNJRCk7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmFnQW5kRHJvcCgpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2tXcmFwXCIpO1xyXG4gIGxldCBkcmFnZ2VkRWxlbWVudDtcclxuXHJcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBkcmFnZ2VkRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgIC8vIGRyYWdnZWRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBldmVudC50YXJnZXQuaW5uZXJIVE1MKTtcclxuICB9KTtcclxuXHJcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBib3VuZGluZ0JveCA9IGRyYWdnZWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIGlmIChldmVudC5jbGllbnRZID4gYm91bmRpbmdCb3guYm90dG9tIHx8IGV2ZW50LmNsaWVudFkgPCBib3VuZGluZ0JveC50b3ApIHtcclxuICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShcclxuICAgICAgICBkcmFnZ2VkRWxlbWVudCxcclxuICAgICAgICBldmVudC50YXJnZXQuY2xvc2VzdChcIi5ib29rTGlzdERpc3BsYXlcIiksXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xyXG5cclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3RWxlbWVudC5jbGFzc05hbWUgPSBcImJvb2tMaXN0RGlzcGxheVwiO1xyXG4gICAgLy8gbmV3RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBuZXdFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmJvb2tcIik7XHJcblxyXG4gICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShuZXdFbGVtZW50LCB0YXJnZXRFbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib29rTGlzdENvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvb2tMaXN0RGlzcGxheSBoM1wiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9va0xpc3RDb3VudGVyLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGJvb2tMaXN0Q291bnRlcltpXS50ZXh0Q29udGVudCA9IGkgKyAxO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZHJhZ0FuZERyb3BUZXN0aW5nKCkge1xyXG4vLyAgIGNvbnN0IGJvb2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29rV3JhcFwiKTtcclxuLy8gICBjb25zdCBib29rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9va0xpc3REaXNwbGF5XCIpO1xyXG5cclxuLy8gICBsZXQgY3VycmVudEJvb2s7XHJcbi8vICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcclxuLy8gICBsZXQgY3VycmVudEluZGV4O1xyXG5cclxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGJvb2tzLmxlbmd0aDsgaSArPSAxKSB7XHJcbi8vICAgICBjb25zdCBib29rID0gYm9va3NbaV07XHJcblxyXG4vLyAgICAgYm9vay5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgY3VycmVudEJvb2sgPSB0aGlzO1xyXG4vLyAgICAgICBjdXJyZW50SW5kZXggPSBpO1xyXG4vLyAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgICAgICBib29rLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuLy8gICAgICAgfSwgMCk7XHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBib29rLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsICgpID0+IHtcclxuLy8gICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgICAgY3VycmVudEJvb2suc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4vLyAgICAgICAgIGN1cnJlbnRCb29rID0gbnVsbDtcclxuLy8gICAgICAgfSwgMCk7XHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBib29rLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xyXG4vLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBib29rLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgKGUpID0+IHtcclxuLy8gICAgICAgY29vcmRpbmF0ZXNbaV0gPSBlLmNsaWVudFk7XHJcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzKTtcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIGJvb2suYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgICAgaWYgKGN1cnJlbnRCb29rICE9PSB0aGlzKSB7XHJcbi8vICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gY29vcmRpbmF0ZXNbY3VycmVudEluZGV4XSA8IGUuY2xpZW50WSA/IDEgOiAtMTtcclxuLy8gICAgICAgICBib29rTGlzdC5pbnNlcnRCZWZvcmUoXHJcbi8vICAgICAgICAgICBjdXJyZW50Qm9vayxcclxuLy8gICAgICAgICAgIGRpcmVjdGlvbiA9PT0gMSA/IHRoaXMubmV4dFNpYmxpbmcgOiB0aGlzLFxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=