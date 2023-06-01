// all files in js is consider as Modules by default
// module encapsulation = to share only requrie code
const names = require("./4-name.js");
const sayHi = require("./5-util.js");
const { peter, jon } = names;
sayHi("vivek");
sayHi(peter);
sayHi(jon);
require("./6-mindgreaner.js");
