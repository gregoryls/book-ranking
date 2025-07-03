import { writeFileSync } from "fs";

import readList from "../readList.json" with { type: "json" };

const rating1Books = [];
const rating2Books = [];
const rating3Books = [];
const rating4Books = [];
const rating5Books = [];

for (let i = 0; i < readList.length; i += 1) {
  if (readList[i]["My Rating"] === 1) {
    rating1Books.push(readList[i]);
  }
  if (readList[i]["My Rating"] === 2) {
    rating2Books.push(readList[i]);
  }
  if (readList[i]["My Rating"] === 3) {
    rating3Books.push(readList[i]);
  }
  if (readList[i]["My Rating"] === 4) {
    rating4Books.push(readList[i]);
  }
  if (readList[i]["My Rating"] === 5) {
    rating5Books.push(readList[i]);
  }
}

const sorted = rating5Books.concat(
  rating4Books,
  rating3Books,
  rating2Books,
  rating1Books,
);

writeFileSync("./src/testRatingSort.json", JSON.stringify(sorted, null, 2));
