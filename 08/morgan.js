var express = require("express");
var morgan = require("morgan");

var app = express();

app.use(morgan("combined"));
// morgan combined 설정시 아래 5줄과 같은 내용이 node 콘솔창에 출력된다.
// ::ffff:127.0.0.1 - - [06/Mar/2022:14:01:51 +0000]
// "GET / HTTP/1.1" 200 22 "-"
// "Mozilla/5.0 (Windows NT 10.0; Win64; x64)
// AppleWebKit/537.36 (KHTML, like Gecko)
// Chrome/98.0.4758.102 Safari/537.36"
app.use(function (req, res) {
  res.send("<h1>express Basic</h1>");
});

app.listen(3333, function () {
  console.log("server running http://127.0.0.1:3333");
});
