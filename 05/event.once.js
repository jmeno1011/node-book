// once는 한번만 실행
process.once("uncaughtException", function (error) {
  console.log("An exception has occurred ! -_-#//");
});

process.on("uncaughtException", onUncaughtException);

var test = function () {
  setTimeout(test, 2000);
  error.error.error();
};

setTimeout(test, 2000);
