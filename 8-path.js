const path = require("path");
// console.log(path.sep);

filepath = path.join("/content", "basfolder", "test.txt");
console.log(filepath);
const base = path.basename(filepath);
console.log(base);
//absoleut paht
absolutepath = path.resolve(__dirname, "connt", "subfolder", "test.txt");
console.log(absolutepath);
