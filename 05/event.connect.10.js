// 12개까지 리밋 제한 해제!
process.setMaxListeners(12);
process.on("exit", function () {});
process.on("exit", function () {});
process.on("exit", function () {});
process.on("exit", function () {});
process.on("exit", function () {});
process.on("exit", function () {});
process.on("exit", function () {});
process.on("exit", function () {});
process.on("exit", function () {});
process.on("exit", function () {});
process.on("exit", function () {});
process.on("exit", function () {});
// process.on("exit", function () {});
// 한 가지의 이벤트에 11개 이상의 이벤트가 연결될 경우 프로그램은 정상종료되지만 경고가 발생한다.
// (node:17000)
// MaxListenersExceededWarning: Possible EventEmitter memory leak detected.
// 11 exit listeners added to [process]. Use emitter.setMaxListeners() to increase limit
// (Use `node --trace-warnings ...` to show where the warning was created)

// ---> 연결 갯수 제한 푸는 메서드
// setMaxListeners(limit)
