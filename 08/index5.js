var express = require("express");

var app = express();

app.use(function (req, res) {
  var name = req.query.name;
  var region = req.query.region;
  // http://127.0.0.1:3333/?name=meno&region=seoul 로 접속해서 확인
  res.send(`<h1>${name} - ${region}</h1>`);
});

app.listen(3333, function () {
  console.log("server running http://127.0.0.1:3333");
});
