var http = require("http");

http
  .createServer(function (req, res) {
    if (req.headers.cookie) {
      //get cookie
      var cookie = req.headers.cookie.split(";").map(function (element) {
        var element = element.split("=");
        return {
          key: element[0],
          value: element[1],
        };
      });
      res.end(`<h1>${JSON.stringify(cookie)}</h1>`);
    } else {
      // 쿠키 생성
      res.writeHead(200, {
        "Content-Type": "text/html",
        "Set-Cookie": ["name = menos", "region  = Seoul"],
      });

      res.end(`<h1>쿠키를 생성했습니다.</h1>`);
    }
  })
  .listen(3333, function () {
    console.log("server running http://127.0.0.1:3333");
  });
