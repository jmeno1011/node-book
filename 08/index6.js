var express = require("express");

var app = express();

// use 매서드 req, res, next
app.use(function (req, res, next) {
  console.log("첫 번째 미들 웨어");
  next();
});

app.use(function (req, res, next) {
  console.log("두 번째 미들 웨어");
  next();
});

app.use(function (req, res, next) {
  console.log("세 번째 미들 웨어");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>express Basic</h1>");
});

app.listen(3333, function () {
  console.log("server running http://127.0.0.1:3333");
});
