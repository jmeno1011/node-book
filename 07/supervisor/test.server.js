var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Test -File -3 </h1>");
  })
  .listen(3333, function () {
    console.log("server running http://127.0.0.1:3333");
  });
