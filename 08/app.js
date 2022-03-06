var express = require("express");

var app = express();

console.log(__dirname);

// 실행되는 js파일과 public 폴더위치가 동일선상에 있어야 한다.
// -> 나중에 확실히 정리 할 것
app.use(express.static(__dirname + "/public"));

app.use(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end('<img src="/img/image1.jpg" width="100%" />');
});

app.listen(3333, function () {
  console.log("server running http://127.0.0.1:3333");
});
