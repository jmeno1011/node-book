require("http")
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello World Web Server with Node.js</h1>");
  })
  .listen(52273, function () {
    console.log("Server Runnig at http://127.0.0.1:52273");
  });
