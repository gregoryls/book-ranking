function importAll(r) {
  const images = {};
  // enclosing bracket around return to avoid ambiguous assignment in a return
  r.keys().forEach((key) => {
    // remove leading ./ from file names
    const temp = key.replace("./", "");
    // or option fix case where lastIndexOf === -1
    // remove trailing file extensions from file names (e.g. .png)
    const temp2 = temp.substr(0, temp.lastIndexOf(".")) || temp;
    // console.log(temp2);
    images[temp2] = r(key);
  });
  // alternate map method
  // r.keys().map((item, index) => {
  //   images[item.replace("./", "")] = r(item);
  // });
  return images;
}

const covers = importAll(
  require.context("./covers", false, /\.(png|jpe?g|svg)$/),
);

export function renderBookList(bookList) {
  console.log(covers);
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

export function placeholder() {
  console.log("nothing");
}
