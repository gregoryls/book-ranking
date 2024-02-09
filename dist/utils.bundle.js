/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/covers sync \\.(png%7Cjpe?g%7Csvg)$":
/*!**************************************************************!*\
  !*** ./src/covers/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./9780316246651.jpg": "./src/covers/9780316246651.jpg",
	"./9780345496249.jpg": "./src/covers/9780345496249.jpg",
	"./9781250313102.jpg": "./src/covers/9781250313102.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/covers sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/covers/9780316246651.jpg":
/*!**************************************!*\
  !*** ./src/covers/9780316246651.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "748147d1cee6e497f505.jpg";

/***/ }),

/***/ "./src/covers/9780345496249.jpg":
/*!**************************************!*\
  !*** ./src/covers/9780345496249.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8af277ad7d4f10945d5a.jpg";

/***/ }),

/***/ "./src/covers/9781250313102.jpg":
/*!**************************************!*\
  !*** ./src/covers/9781250313102.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9e748e885bf88aa22f01.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
  __webpack_require__("./src/covers sync \\.(png%7Cjpe?g%7Csvg)$"),
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
    img.src = covers[bookList[i].ISBN13];
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0VBQXdEO0FBQzFEO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci8uL3NyYy9jb3ZlcnMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci8uL3NyYy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vOTc4MDMxNjI0NjY1MS5qcGdcIjogXCIuL3NyYy9jb3ZlcnMvOTc4MDMxNjI0NjY1MS5qcGdcIixcblx0XCIuLzk3ODAzNDU0OTYyNDkuanBnXCI6IFwiLi9zcmMvY292ZXJzLzk3ODAzNDU0OTYyNDkuanBnXCIsXG5cdFwiLi85NzgxMjUwMzEzMTAyLmpwZ1wiOiBcIi4vc3JjL2NvdmVycy85NzgxMjUwMzEzMTAyLmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9jb3ZlcnMgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XHJcbiAgY29uc3QgaW1hZ2VzID0ge307XHJcbiAgLy8gZW5jbG9zaW5nIGJyYWNrZXQgYXJvdW5kIHJldHVybiB0byBhdm9pZCBhbWJpZ3VvdXMgYXNzaWdubWVudCBpbiBhIHJldHVyblxyXG4gIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgLy8gcmVtb3ZlIGxlYWRpbmcgLi8gZnJvbSBmaWxlIG5hbWVzXHJcbiAgICBjb25zdCB0ZW1wID0ga2V5LnJlcGxhY2UoXCIuL1wiLCBcIlwiKTtcclxuICAgIC8vIG9yIG9wdGlvbiBmaXggY2FzZSB3aGVyZSBsYXN0SW5kZXhPZiA9PT0gLTFcclxuICAgIC8vIHJlbW92ZSB0cmFpbGluZyBmaWxlIGV4dGVuc2lvbnMgZnJvbSBmaWxlIG5hbWVzIChlLmcuIC5wbmcpXHJcbiAgICBjb25zdCB0ZW1wMiA9IHRlbXAuc3Vic3RyKDAsIHRlbXAubGFzdEluZGV4T2YoXCIuXCIpKSB8fCB0ZW1wO1xyXG4gICAgaW1hZ2VzW3RlbXAyXSA9IHIoa2V5KTtcclxuICB9KTtcclxuICAvLyBhbHRlcm5hdGUgbWFwIG1ldGhvZFxyXG4gIC8vIHIua2V5cygpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAvLyAgIGltYWdlc1tpdGVtLnJlcGxhY2UoXCIuL1wiLCBcIlwiKV0gPSByKGl0ZW0pO1xyXG4gIC8vIH0pO1xyXG4gIHJldHVybiBpbWFnZXM7XHJcbn1cclxuXHJcbmNvbnN0IGNvdmVycyA9IGltcG9ydEFsbChcclxuICByZXF1aXJlLmNvbnRleHQoXCIuL2NvdmVyc1wiLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSxcclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb29rTGlzdChib29rTGlzdCkge1xyXG4gIGNvbnNvbGUubG9nKGNvdmVycyk7XHJcbiAgY29uc3QgYm9va1dyYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2tXcmFwXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9va0xpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBhdXRob3JQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblxyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJib29rTGlzdERpc3BsYXlcIik7XHJcbiAgICBkaXYuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIGgzLnRleHRDb250ZW50ID0gaSArIDE7XHJcbiAgICBpbWcuc3JjID0gY292ZXJzW2Jvb2tMaXN0W2ldLklTQk4xM107XHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChcImJvb2tDb3ZlclwiKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBib29rTGlzdFtpXS5UaXRsZTtcclxuICAgIGF1dGhvclAudGV4dENvbnRlbnQgPSBib29rTGlzdFtpXS5BdXRob3I7XHJcbiAgICBkaXYuYXBwZW5kKGgzLCBpbWcsIHAsIGF1dGhvclApO1xyXG4gICAgYm9va1dyYXAuYXBwZW5kKGRpdik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0TmV3Qm9va0lucHV0cygpIHtcclxuLy8gICBjb25zdCBnb29kcmVhZHNJRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ29vZHJlYWRzSURcIikudmFsdWU7XHJcbi8vICAgY29uc29sZS5sb2coZ29vZHJlYWRzSUQpO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0FuZERyb3AoKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29rV3JhcFwiKTtcclxuICBsZXQgZHJhZ2dlZEVsZW1lbnQ7XHJcblxyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgZHJhZ2dlZEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAvLyBkcmFnZ2VkRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZXZlbnQudGFyZ2V0LmlubmVySFRNTCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYm91bmRpbmdCb3ggPSBkcmFnZ2VkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBpZiAoZXZlbnQuY2xpZW50WSA+IGJvdW5kaW5nQm94LmJvdHRvbSB8fCBldmVudC5jbGllbnRZIDwgYm91bmRpbmdCb3gudG9wKSB7XHJcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgZHJhZ2dlZEVsZW1lbnQsXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuYm9va0xpc3REaXNwbGF5XCIpLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcclxuXHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5ld0VsZW1lbnQuY2xhc3NOYW1lID0gXCJib29rTGlzdERpc3BsYXlcIjtcclxuICAgIC8vIG5ld0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgbmV3RWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5ib29rXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUobmV3RWxlbWVudCwgdGFyZ2V0RWxlbWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYm9va0xpc3RDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib29rTGlzdERpc3BsYXkgaDNcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvb2tMaXN0Q291bnRlci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBib29rTGlzdENvdW50ZXJbaV0udGV4dENvbnRlbnQgPSBpICsgMTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGRyYWdBbmREcm9wVGVzdGluZygpIHtcclxuLy8gICBjb25zdCBib29rTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9va1dyYXBcIik7XHJcbi8vICAgY29uc3QgYm9va3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvb2tMaXN0RGlzcGxheVwiKTtcclxuXHJcbi8vICAgbGV0IGN1cnJlbnRCb29rO1xyXG4vLyAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XHJcbi8vICAgbGV0IGN1cnJlbnRJbmRleDtcclxuXHJcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib29rcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4vLyAgICAgY29uc3QgYm9vayA9IGJvb2tzW2ldO1xyXG5cclxuLy8gICAgIGJvb2suYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgIGN1cnJlbnRCb29rID0gdGhpcztcclxuLy8gICAgICAgY3VycmVudEluZGV4ID0gaTtcclxuLy8gICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgICAgYm9vay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbi8vICAgICAgIH0sIDApO1xyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgYm9vay5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCAoKSA9PiB7XHJcbi8vICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgICAgIGN1cnJlbnRCb29rLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuLy8gICAgICAgICBjdXJyZW50Qm9vayA9IG51bGw7XHJcbi8vICAgICAgIH0sIDApO1xyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgYm9vay5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcclxuLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgYm9vay5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIChlKSA9PiB7XHJcbi8vICAgICAgIGNvb3JkaW5hdGVzW2ldID0gZS5jbGllbnRZO1xyXG4vLyAgICAgICAvLyBjb25zb2xlLmxvZyhjb29yZGluYXRlcyk7XHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICBib29rLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgICAgIGlmIChjdXJyZW50Qm9vayAhPT0gdGhpcykge1xyXG4vLyAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGNvb3JkaW5hdGVzW2N1cnJlbnRJbmRleF0gPCBlLmNsaWVudFkgPyAxIDogLTE7XHJcbi8vICAgICAgICAgYm9va0xpc3QuaW5zZXJ0QmVmb3JlKFxyXG4vLyAgICAgICAgICAgY3VycmVudEJvb2ssXHJcbi8vICAgICAgICAgICBkaXJlY3Rpb24gPT09IDEgPyB0aGlzLm5leHRTaWJsaW5nIDogdGhpcyxcclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gICB9XHJcbi8vIH1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9