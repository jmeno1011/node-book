var url = require("url");
var querystring = require("querystring");

var parserdObject = url.parse(
  "http://www.habit.co.kr/store/books/look.php?p_code=B4250257160"
);
console.log("url 객체 추출 : ", parserdObject);
console.log(
  "url 객체 중 쿼리 스크링 추출 : ",
  querystring.parse(parserdObject.query)
);
