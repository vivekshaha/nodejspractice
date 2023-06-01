const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = data;

  writeFile(
    "./content/test1.txt",
    `awsome content ${first} `,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    }
  );
});
