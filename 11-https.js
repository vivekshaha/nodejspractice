const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end(`<h1>this is my first server congratusaliton</h1>`);
  }
  if (req.url == "/about") {
    res.end(`<h1>ye bhai ye aobut page hi busbak</h1>`);
  }
  res.end(`<h1>Bhai app galt gajah phut gaye ho pls niche wale lik par clikd karo</h1>
    
    <a href="/">clikc kar bhai<a>`);
});

server.listen("5000");
