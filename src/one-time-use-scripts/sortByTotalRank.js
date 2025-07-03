import { readlink, writeFileSync } from "fs";

import readList from "../readList.json" with { type: "json" };

const tempList = [];

let i = 0;
console.log(readList.length);
