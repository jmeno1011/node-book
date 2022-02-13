var fs = require("fs");
var http = require("http");
const path = require("path");

http
  .createServer(function (req, res) {
    // html파일을 읽어와서 http서버르 보낸다.
    fs.readFile(
      path.resolve(__dirname, "./index.html"),
      // "utf8",
      // data에는 html파일을 읽어온 정보를 가지고 있다.
      function (error, data) {
        // console.log(data); => log를 보면 html파일을 text로 보여준다.
        res.writeHead(200, { "content-Type": "text/html" });
        res.end(data);
      }
    );
  })
  .listen(52273, function () {
    console.log("server running at http://127.0.0.1:52273");
  });
