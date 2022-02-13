var fs = require("fs");
var http = require("http");
const path = require("path");

http
  .createServer(function (req, res) {
    fs.readFile(
      path.resolve(__dirname, "unsplash.jpg"),
      function (error, data) {
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        res.end(data);
      }
    );
  })
  .listen(52273, function () {
    console.log("server running at http://127.0.0.1:52273");
  });

http
  .createServer(function (req, res) {
    fs.readFile(
      path.resolve(__dirname, "After_You.mp3"),
      function (error, data) {
        res.writeHead(200, { "Content-Type": "audio/mp3" });
        res.end(data);
      }
    );
  })
  .listen(52274, function () {
    console.log("server running at http://127.0.0.1:52274");
  });
