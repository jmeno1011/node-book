var express = require("express");

var app = express();

app.use(function (req, res) {
  var agent = req.header("User-Agent");
  console.log(req.headers);
  // req.headers ={
  //   host: '127.0.0.1:3333',
  //   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0',
  //   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  //   'accept-language': 'ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3',
  //   'accept-encoding': 'gzip, deflate',
  //   connection: 'keep-alive',
  //   cookie: 'hblid=MffKxme9u62g4DW63m39N0G0n0V1kKA1; olfsk=olfsk24945281572200728',
  //   'upgrade-insecure-requests': '1',
  //   'sec-fetch-dest': 'document',
  //   'sec-fetch-mode': 'navigate',
  //   'sec-fetch-site': 'none',
  //   'sec-fetch-user': '?1',
  //   'sec-gpc': '1',
  //   'cache-control': 'max-age=0'
  // }
  console.log(agent);
  // Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0
  res.sendStatus(200);
});

app.listen(3333, function () {
  console.log("server running http://127.0.0.1:3333");
});
