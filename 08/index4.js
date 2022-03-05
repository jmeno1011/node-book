var express = require("express");

var app = express();

app.use(function (req, res) {
  var agent = req.header("User-Agent");
  if (agent.toLowerCase().match(/chrome/)) {
    res.send("<h1>Hello Chrome ... !</h1>");
  } else {
    res.send("<h1>Hello Express .. ! </h1>");
  }
});

app.listen(3333, function () {
  console.log("server running http://127.0.0.1:3333");
});
