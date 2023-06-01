const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);
writeFileSync(
  "./content/test.txt",
  `this is the const for ${first} ${second}`,
  { flag: "a" }
);
