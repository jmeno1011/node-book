// var http = require("http");
// var server = http.createServer();
var server = require("http").createServer();

const PORT = 52273;

server.listen(PORT, function () {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});

var test = function () {
  //서버를 종료합니다.
  console.log("close server");
  server.close();
};

setTimeout(test, 5000);
