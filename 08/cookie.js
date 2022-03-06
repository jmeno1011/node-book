var express = require("express");
const cookieParser = require("cookie-parser");

var app = express();

app.use(cookieParser());

/// setCookie로 이동시 res.cookie로 설정된 값들이 getCookie에서 req.cookies로 나오게 된다.

app.get("/getCookie", function (req, res) {
  console.log(req.cookies);
  res.send(req.cookies);
});

app.get("/setCookie", function (req, res) {
  res.cookie("string", "cookie");
  res.cookie("json", {
    name: "cookie",
    property: "delicious",
  });

  res.redirect("/getCookie");
});

app.listen(3333, function () {
  console.log("server running http://127.0.0.1:3333");
});
