var fs = require("fs");
var http = require("http");
const path = require("path");

http
  .createServer(function (req, res) {
    var date = new Date();
    date.setDate(date.getDate() + 7);

    res.writeHead(200, {
      "content-Type": "text/html",
      "Set-Cookie": ["breakfast = toast", "dinner = chikien"],
    });

    res.end("<h1>" + req.headers.cookie + "</h1>");
  })
  .listen(52273, function () {
    console.log("server running at http://127.0.0.1:52273");
  });
