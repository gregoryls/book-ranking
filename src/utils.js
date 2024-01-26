export function renderBookList(bookList) {
  const bookWrap = document.getElementById("bookWrap");
  for (let i = 0; i < bookList.length; i += 1) {
    const div = document.createElement("div");
    const p = document.createElement("p");

    p.textContent = bookList[i].Title;
    div.append(p);
    bookWrap.append(div);
  }
}
