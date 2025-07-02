// function importAll(r) {
//   const images = {};
//   // enclosing bracket around return to avoid ambiguous assignment in a return
//   r.keys().forEach((key) => {
//     // remove leading ./ from file names
//     const temp = key.replace("./", "");
//     // or option fix case where lastIndexOf === -1
//     // remove trailing file extensions from file names (e.g. .png)
//     const temp2 = temp.substr(0, temp.lastIndexOf(".")) || temp;
//     images[temp2] = r(key);
//   });
//   // alternate map method
//   // r.keys().map((item, index) => {
//   //   images[item.replace("./", "")] = r(item);
//   // });
//   return images;
// }

// const covers = importAll(
//   require.context("./covers", false, /\.(png|jpe?g|svg)$/),
// );

const coverContext = import.meta.webpackContext("./covers", {
  recursive: false,
  regex: /\.(png|jpe?g|svg)$/i,
});

const covers = {};
for (const key of coverContext.keys()) {
  // remove prefix and extension from image file names
  const fileName = key.replace("./", "").replace(/\.[^/.]+$/, "");
  covers.fileName = coverContext(key);
}

console.log(covers);

// Now use like:
// img.src = covers[book.ISBN13] || covers[book.Title];

export function renderBookList(bookList) {
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
