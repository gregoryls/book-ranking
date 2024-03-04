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

export function getPublisher() {
  const publisher = document.getElementById("publisher");
  return publisher.value;
}

export function getYearPublished() {
  const year = document.getElementById("yearPublished");
  return year.value;
}

export function getPages() {
  const pages = document.getElementById("pages");
  return pages.value;
}

export function getOriginalPublicationYear() {
  const year = document.getElementById("originalPublicationyear");
  return year.value;
}

export function getStartDate() {
  const date = document.getElementById("dateStarted");
  return date.value;
}

export function getFinishDate() {
  const date = document.getElementById("dateFinished");
  return date.value;
}

export function getAddedDate() {
  const date = document.getElementById("dateAdded");
  return date.value;
}

export function getFormat() {
  const format = document.getElementById("format");
  return format.value;
}

export function getReread() {
  const reread = document.getElementById("reread");
  if (reread.checked) return true;
  return false;
}

export function getGenre() {
  const genreTags = document.getElementById("genreTags");
  const genreArray = genreTags.value.split(",");
  return genreArray;
}

export function getReview() {
  const review = document.getElementById("review");
  return review.value;
}

export function getBookCover() {
  const cover = document.getElementById("bookCoverInput").files[0];
  return cover;
}
