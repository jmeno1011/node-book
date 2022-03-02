var http = require("http");
var fs = require("fs");
var jade = require("jade");
var path = require("path");

http
  .createServer(function (req, res) {
    fs.readFile(
      path.resolve(__dirname, "./ JadePage.jade"),
      "utf8",
      function (error, data) {
        var fn = jade.compile(data);
        res.writeHead(200, { "Content-Tpye": "text/html" });
        res.end(fn());
      }
    );
  })
  .listen(3333, function () {
    console.log("server running http://127.0.0.1:3333");
  });
