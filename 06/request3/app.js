var http = require("http");
var fs = require("fs");
var url = require("url");
const path = require("path");

// method 속성을 이용한 페이지 구분
http
  .createServer(function (req, res) {
    if (req.method === "GET") {
      fs.readFile(
        path.resolve(__dirname, "index.html"),
        function (error, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      );
    } else if (req.method === "POST") {
      req.on("data", function (data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>" + data + "</h1>");
      });
    }
  })
  .listen(3333, function () {
    console.log("server running at http://127.0.0.1:3333");
  });
