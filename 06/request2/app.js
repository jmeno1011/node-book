var http = require("http");
const url = require("url");

// method 속성을 이용한 페이지 구분
http
  .createServer(function (req, res) {
    var query = url.parse(req.url, true).query;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>" + JSON.stringify(query) + "</h1>");
  })
  .listen(3333, function () {
    console.log("server running at http://127.0.0.1:3333");
  });
