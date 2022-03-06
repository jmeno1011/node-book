var express = require("express");

var app = express();

// 라우터 생성
var routerA = express.Router();
var routerB = express.Router();
// 모듈화 시킨 라우터 불러오기
var routerC = require("./routerC").router;

routerA.get("/index", function (req, res) {
  res.send("<h1>Index Page</h1>");
});

routerB.get("/index", function (res, req) {
  res.send("<h1>Index Page</h1>");
});

app.use("/a", routerA);
app.use("/b", routerB);
// 불러온 라우터 사용
app.use("/c", routerC);

app.listen(3333, function () {
  console.log("server running http://127.0.0.1:3333");
});
