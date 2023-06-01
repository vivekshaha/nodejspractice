// built in funtion
// OS
// PATH
// HTTP
//FS

const os = require("os");
//info about the current user
user = os.userInfo();
// console.log(user);
//system uptime

console.log(`this is current mahcine runtime in secont ${os.uptime()}`);
currentos = {
  name: os.type(),
  realease: os.release(),
  tomem: os.totalmem(),
  frmem: os.freemem(),
};
console.log(currentos);
