// process 객체에 exit이벤트 연결
process.on("exit", function (code) {
  console.log("good bye~ ^_^//");
});

process.on("uncaughtException", function (error) {
  console.log("An exception has occurred ! -_-#//");
});

var count = 0;
var test = function () {
  // escape code
  count = count + 1;
  if (count > 3) {
    return;
  }
  setTimeout(test, 2000);
  error.error.error();
};
setTimeout(test, 2000);
