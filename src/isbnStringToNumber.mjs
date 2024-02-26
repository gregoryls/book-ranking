import { readFileSync, writeFileSync } from "fs";

const filePath = "src/bookList.json"; // Replace with the actual path to your source JSON file
const updatedFilePath = "src/bookListUpdate.json";

// Read the JSON file
readFileSync(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err.message}`);
    return;
  }

  try {
    // Parse the JSON data
    const bookList = JSON.parse(data);

    bookList.forEach((book) => {
      if (typeof book.ISBN13 === "string") {
        book.ISBN13 = parseFloat(book.ISBN13);
      }
    });

    // Save the updated data back to the JSON file
    const updatedData = JSON.stringify(bookList, null, 2);
    writeFileSync(updatedFilePath, updatedData, "utf8", (writeErr) => {
      if (writeErr) {
        console.error(`Error writing to the file: ${writeErr.message}`);
      } else {
        console.log("Conversion and update successful!");
      }
    });
  } catch (parseError) {
    console.error(`Error parsing JSON: ${parseError.message}`);
  }
});
