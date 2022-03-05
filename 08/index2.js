var express = require("express");

var app = express();

app.use(function (req, res) {
  var output = [];
  for (var i = 0; i < 3; i++) {
    output.push({
      count: i,
      name: "name - " + i,
    });
  }
  res.send(output);
});

app.listen(3333, function () {
  console.log("server running http://127.0.0.1:3333");
});
