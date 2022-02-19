var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(404);
    res.end();
  })
  .listen(3333, function () {
    console.log("server running at http://127.0.0.1:3333");
  });
