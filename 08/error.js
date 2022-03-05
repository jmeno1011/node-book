var express = require("express");

var app = express();

app.use(function (req, res) {
  res.status(404).send("<h1>ERROR</h1>");
});

app.listen(3333, function () {
  console.log("server running http://127.0.0.1:3333");
});
