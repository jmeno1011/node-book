var express = require("express");

var app = express();

// 1번 use 에서 추가한 req.number와 res.number를
// 2번 use 에서 사용이 가능하다.
app.use(function (req, res, next) {
  req.number = 52;
  res.number = 273;
  next();
});

app.use(function (req, res, next) {
  res.send(`<h1>${req.number} : ${res.number} </h1>`);
});

app.listen(3333, function () {
  console.log("server running http://127.0.0.1:3333");
});
