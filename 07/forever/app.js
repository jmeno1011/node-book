require("http")
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.write("<!DOCTPYE html>");
      res.write("<html>");
      res.write("<head>");
      res.write(" <title>Forever</title>");
      res.write("</head>");
      res.write("<body>");
      res.write(" <h1>Forever</h1>");
      res.write("</body>");
      res.write("</html>");
      res.end();
    } else {
      //오류
      error.error.error();
    }
  })
  .listen(3333, function () {
    console.log("server running http://127.0.0.1:3333");
  });
