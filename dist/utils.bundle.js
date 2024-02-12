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
	"./9780525536512.jpg": "./src/covers/9780525536512.jpg",
	"./9781250313102.jpg": "./src/covers/9781250313102.jpg",
	"./9781982164553.jpg": "./src/covers/9781982164553.jpg"
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

/***/ "./src/covers/9780525536512.jpg":
/*!**************************************!*\
  !*** ./src/covers/9780525536512.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d028aa3d68ad25fa800f.jpg";

/***/ }),

/***/ "./src/covers/9781250313102.jpg":
/*!**************************************!*\
  !*** ./src/covers/9781250313102.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9e748e885bf88aa22f01.jpg";

/***/ }),

/***/ "./src/covers/9781982164553.jpg":
/*!**************************************!*\
  !*** ./src/covers/9781982164553.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "90e23f9b30daa93d17ef.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnRUFBd0Q7QUFDMUQ7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yLy4vc3JjL2NvdmVycy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yLy4vc3JjL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi85NzgwMzE2MjQ2NjUxLmpwZ1wiOiBcIi4vc3JjL2NvdmVycy85NzgwMzE2MjQ2NjUxLmpwZ1wiLFxuXHRcIi4vOTc4MDM0NTQ5NjI0OS5qcGdcIjogXCIuL3NyYy9jb3ZlcnMvOTc4MDM0NTQ5NjI0OS5qcGdcIixcblx0XCIuLzk3ODA1MjU1MzY1MTIuanBnXCI6IFwiLi9zcmMvY292ZXJzLzk3ODA1MjU1MzY1MTIuanBnXCIsXG5cdFwiLi85NzgxMjUwMzEzMTAyLmpwZ1wiOiBcIi4vc3JjL2NvdmVycy85NzgxMjUwMzEzMTAyLmpwZ1wiLFxuXHRcIi4vOTc4MTk4MjE2NDU1My5qcGdcIjogXCIuL3NyYy9jb3ZlcnMvOTc4MTk4MjE2NDU1My5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvY292ZXJzIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJmdW5jdGlvbiBpbXBvcnRBbGwocikge1xyXG4gIGNvbnN0IGltYWdlcyA9IHt9O1xyXG4gIC8vIGVuY2xvc2luZyBicmFja2V0IGFyb3VuZCByZXR1cm4gdG8gYXZvaWQgYW1iaWd1b3VzIGFzc2lnbm1lbnQgaW4gYSByZXR1cm5cclxuICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgIC8vIHJlbW92ZSBsZWFkaW5nIC4vIGZyb20gZmlsZSBuYW1lc1xyXG4gICAgY29uc3QgdGVtcCA9IGtleS5yZXBsYWNlKFwiLi9cIiwgXCJcIik7XHJcbiAgICAvLyBvciBvcHRpb24gZml4IGNhc2Ugd2hlcmUgbGFzdEluZGV4T2YgPT09IC0xXHJcbiAgICAvLyByZW1vdmUgdHJhaWxpbmcgZmlsZSBleHRlbnNpb25zIGZyb20gZmlsZSBuYW1lcyAoZS5nLiAucG5nKVxyXG4gICAgY29uc3QgdGVtcDIgPSB0ZW1wLnN1YnN0cigwLCB0ZW1wLmxhc3RJbmRleE9mKFwiLlwiKSkgfHwgdGVtcDtcclxuICAgIGltYWdlc1t0ZW1wMl0gPSByKGtleSk7XHJcbiAgfSk7XHJcbiAgLy8gYWx0ZXJuYXRlIG1hcCBtZXRob2RcclxuICAvLyByLmtleXMoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgLy8gICBpbWFnZXNbaXRlbS5yZXBsYWNlKFwiLi9cIiwgXCJcIildID0gcihpdGVtKTtcclxuICAvLyB9KTtcclxuICByZXR1cm4gaW1hZ2VzO1xyXG59XHJcblxyXG5jb25zdCBjb3ZlcnMgPSBpbXBvcnRBbGwoXHJcbiAgcmVxdWlyZS5jb250ZXh0KFwiLi9jb3ZlcnNcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLyksXHJcbik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQm9va0xpc3QoYm9va0xpc3QpIHtcclxuICBjb25zb2xlLmxvZyhjb3ZlcnMpO1xyXG4gIGNvbnN0IGJvb2tXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29rV3JhcFwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvb2tMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgYXV0aG9yUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiYm9va0xpc3REaXNwbGF5XCIpO1xyXG4gICAgZGl2LmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICBoMy50ZXh0Q29udGVudCA9IGkgKyAxO1xyXG4gICAgaW1nLnNyYyA9IGNvdmVyc1tib29rTGlzdFtpXS5JU0JOMTNdO1xyXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJib29rQ292ZXJcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gYm9va0xpc3RbaV0uVGl0bGU7XHJcbiAgICBhdXRob3JQLnRleHRDb250ZW50ID0gYm9va0xpc3RbaV0uQXV0aG9yO1xyXG4gICAgZGl2LmFwcGVuZChoMywgaW1nLCBwLCBhdXRob3JQKTtcclxuICAgIGJvb2tXcmFwLmFwcGVuZChkaXYpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldE5ld0Jvb2tJbnB1dHMoKSB7XHJcbi8vICAgY29uc3QgZ29vZHJlYWRzSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvb2RyZWFkc0lEXCIpLnZhbHVlO1xyXG4vLyAgIGNvbnNvbGUubG9nKGdvb2RyZWFkc0lEKTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdBbmREcm9wKCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9va1dyYXBcIik7XHJcbiAgbGV0IGRyYWdnZWRFbGVtZW50O1xyXG5cclxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZXZlbnQpID0+IHtcclxuICAgIGRyYWdnZWRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgLy8gZHJhZ2dlZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIGV2ZW50LnRhcmdldC5pbm5lckhUTUwpO1xyXG4gIH0pO1xyXG5cclxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGJvdW5kaW5nQm94ID0gZHJhZ2dlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgaWYgKGV2ZW50LmNsaWVudFkgPiBib3VuZGluZ0JveC5ib3R0b20gfHwgZXZlbnQuY2xpZW50WSA8IGJvdW5kaW5nQm94LnRvcCkge1xyXG4gICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgIGRyYWdnZWRFbGVtZW50LFxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmJvb2tMaXN0RGlzcGxheVwiKSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7XHJcblxyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuZXdFbGVtZW50LmNsYXNzTmFtZSA9IFwiYm9va0xpc3REaXNwbGF5XCI7XHJcbiAgICAvLyBuZXdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIG5ld0VsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcclxuXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuYm9va1wiKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xyXG4gICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnQsIHRhcmdldEVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJvb2tMaXN0Q291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9va0xpc3REaXNwbGF5IGgzXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib29rTGlzdENvdW50ZXIubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgYm9va0xpc3RDb3VudGVyW2ldLnRleHRDb250ZW50ID0gaSArIDE7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBkcmFnQW5kRHJvcFRlc3RpbmcoKSB7XHJcbi8vICAgY29uc3QgYm9va0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2tXcmFwXCIpO1xyXG4vLyAgIGNvbnN0IGJvb2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib29rTGlzdERpc3BsYXlcIik7XHJcblxyXG4vLyAgIGxldCBjdXJyZW50Qm9vaztcclxuLy8gICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xyXG4vLyAgIGxldCBjdXJyZW50SW5kZXg7XHJcblxyXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9va3MubGVuZ3RoOyBpICs9IDEpIHtcclxuLy8gICAgIGNvbnN0IGJvb2sgPSBib29rc1tpXTtcclxuXHJcbi8vICAgICBib29rLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICBjdXJyZW50Qm9vayA9IHRoaXM7XHJcbi8vICAgICAgIGN1cnJlbnRJbmRleCA9IGk7XHJcbi8vICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgICAgIGJvb2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4vLyAgICAgICB9LCAwKTtcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIGJvb2suYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgKCkgPT4ge1xyXG4vLyAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICAgICAgICBjdXJyZW50Qm9vay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbi8vICAgICAgICAgY3VycmVudEJvb2sgPSBudWxsO1xyXG4vLyAgICAgICB9LCAwKTtcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIGJvb2suYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiB7XHJcbi8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIGJvb2suYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCAoZSkgPT4ge1xyXG4vLyAgICAgICBjb29yZGluYXRlc1tpXSA9IGUuY2xpZW50WTtcclxuLy8gICAgICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZXMpO1xyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgYm9vay5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgICBpZiAoY3VycmVudEJvb2sgIT09IHRoaXMpIHtcclxuLy8gICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBjb29yZGluYXRlc1tjdXJyZW50SW5kZXhdIDwgZS5jbGllbnRZID8gMSA6IC0xO1xyXG4vLyAgICAgICAgIGJvb2tMaXN0Lmluc2VydEJlZm9yZShcclxuLy8gICAgICAgICAgIGN1cnJlbnRCb29rLFxyXG4vLyAgICAgICAgICAgZGlyZWN0aW9uID09PSAxID8gdGhpcy5uZXh0U2libGluZyA6IHRoaXMsXHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==