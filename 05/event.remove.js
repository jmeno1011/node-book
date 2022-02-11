var onUncaughtException = function (error) {
  console.log("An exception has occurred ! -_-#//");
  // 예외처리 이벤트 리스너가 제거되어서
  // ReferenceError: error is not defined 가 발생
  process.removeListener("uncaughtException", onUncaughtException);
};

process.on("uncaughtException", onUncaughtException);

var test = function () {
  setTimeout(test, 2000);
  error.error.error();
};

setTimeout(test, 2000);
