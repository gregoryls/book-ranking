const coverContext = import.meta.webpackContext("./covers", {
  recursive: false,
  regExp: /\.(png|jpe?g|svg)$/i,
});

console.log(coverContext.keys());

const covers = {};
coverContext.keys().forEach((key) => {
  // remove prefix and extension from image file names
  const fileName = key.replace("./", "").replace(/\.[^/.]+$/, "");
  covers[fileName] = coverContext(key);
});

export function renderBookList(bookList) {
  console.log(covers);
  const bookWrap = document.getElementById("bookWrap");
  for (let i = 0; i < bookList.length; i += 1) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const authorP = document.createElement("p");
    const starP = document.createElement("p");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");

    div.classList.add("bookListDisplay");
    div.dataset.id = bookList[i].totalRanking;
    div.draggable = true;
    h3.textContent = i + 1;

    // most books have an ISBN13 and the cover is stored with that as a filename
    // Alternative filename uses book title instead when ISBN13 is missing

    img.src = covers[bookList[i].ISBN13] || covers[bookList[i].Title];

    img.classList.add("bookCover");
    p.textContent = bookList[i].Title;
    authorP.textContent = bookList[i].Author;
    for (let j = 0; j < bookList[i].readingData.at(-1).rating; j += 1) {
      starP.innerHTML += "&#11088";
    }

    div.append(h3, img, p, authorP, starP);
    bookWrap.append(div);
  }
}

// currently unused, slate for delete
export function dragAndDrop() {
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
