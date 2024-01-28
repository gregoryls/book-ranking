export function renderBookList(bookList) {
  const bookWrap = document.getElementById("bookWrap");
  for (let i = 0; i < bookList.length; i += 1) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const authorP = document.createElement("p");
    const h3 = document.createElement("h3");

    div.classList.add("bookListDisplay");
    h3.textContent = i + 1;
    p.textContent = bookList[i].Title;
    authorP.textContent = bookList[i].Author;
    div.append(h3, p, authorP);
    bookWrap.append(div);
  }
}
