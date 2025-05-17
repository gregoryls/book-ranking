import { readFileSync, writeFileSync } from "fs";

const filePath = "src/bookList.json";
const updatedFilePath = "src/bookListUpdated.json";
// Read the JSON file
const jsonData = readFileSync(filePath, "utf8");

// Parse the JSON data
const bookList = JSON.parse(jsonData);

// Convert specified property values from strings to numbers
bookList.forEach((book) => {
  if (typeof book.ISBN13 === "string") {
    book.ISBN13 = parseFloat(book.ISBN13);
  }
});

// Save the updated data back to the JSON file
const updatedData = JSON.stringify(bookList, null, 2);
writeFileSync(updatedFilePath, updatedData, "utf8");
