export function getGoodreadsIDInput() {
  const ID = document.getElementById("goodreadsID");
  return ID.value;
}
export function getAuthorInput() {
  const author = document.getElementById("author");
  return author.value;
}

export function getAdditionalAuthors() {
  const authors = document.getElementById("additionalAuthors");
  const authorsArray = authors.value.split(",");
  return authorsArray;
}

export function getISBN() {
  const ISBN = document.getElementById("ISBN");
  return ISBN.value;
}

export function getStarRating() {
  const rating = document.getElementById("starRating");
  return rating.value;
}

export function getPublicRating() {
  const rating = document.getElementById("publicRating");
  return rating.value;
}
