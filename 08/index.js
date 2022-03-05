var express = require("express");

var app = express();

app.use(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello express</h1>");
});

app.listen(3333, function () {
  console.log("server running http://127.0.0.1:3333");
});
