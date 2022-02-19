var http = require("http");
var fs = require("fs");
var url = require("url");
const path = require("path");

http
  .createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;

    //페이지 구분
    if (pathname === "/") {
      fs.readFile(
        path.resolve(__dirname, "index.html"),
        function (error, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      );
    } else if (pathname === "/OtherPage") {
      fs.readFile(
        path.resolve(__dirname, "OtherPage.html"),
        function (error, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      );
    }
  })
  .listen(3333, function () {
    console.log("server running at http://127.0.0.1:3333");
  });
