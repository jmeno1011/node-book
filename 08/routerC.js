// 라우터 모듈화
var express = require("express");
var router = express.Router();

router.get("/index", function (req, res) {
  res.send("<h1>Index Page</h1>");
});

exports.router = router;
