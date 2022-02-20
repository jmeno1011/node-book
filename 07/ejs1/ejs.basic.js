var http = require("http");
var fs = require("fs");
var path = require("path");
var ejs = require("ejs");

http
  .createServer(function (req, res) {
    fs.readFile(
      path.resolve(__dirname, "./ejsPage.ejs"),
      "utf8",
      function (error, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(ejs.render(data));
      }
    );
  })
  .listen(3333, function () {
    console.log("server running http://127.0.0.1:3333");
  });
