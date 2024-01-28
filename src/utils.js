export function renderBookList(bookList) {
  const bookWrap = document.getElementById("bookWrap");
  for (let i = 0; i < bookList.length; i += 1) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const h3 = document.createElement("h3");

    div.classList.add("bookListDisplay");
    h3.textContent = i;
    p.textContent = bookList[i].Title;
    div.append(h3, p);
    bookWrap.append(div);
  }
}
