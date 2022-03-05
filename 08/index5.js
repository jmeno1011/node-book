var express = require("express");

var app = express();

app.use(function (req, res) {
  var name = req.query.name;
  var region = req.query.region;
  res.send(`<h1>${name} - ${region}</h1>`);
});

app.listen(3333, function () {
  console.log("server running http://127.0.0.1:3333");
});
