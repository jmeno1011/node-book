var express = require("express");

var app = express();

// 라우터 설정
app.get("/a", function (req, res) {
  res.send('<a href="/b">Go to B</a>');
});

app.get("/b", function (req, res) {
  res.send('<a href="/a">Go to A</a>');
});

// params => /:id 처럼 기호로 지정되는 라우팅 매개 변수
// query => ?name=A 와 같은 요청 매개 변수
app.get("/page/:id", function (req, res) {
  var name = req.params.id;

  res.send(`<h1>${name} Page</h1>`);
});

// all 전체 선택자를 사용하여 위에 선언된 주소 이외의 주소는 404로 간주하게 한다.
// 전체 선택자를 사용하는 라우터는 마지막에 위치해야함
app.all("*", function (req, res) {
  res.status(404).send("<h1>ERROR - Page Not Found</h1>");
});

app.listen(3333, function () {
  console.log("server running http://127.0.0.1:3333");
});
