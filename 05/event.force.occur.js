process.on("exit", function (code) {
  console.log("good bye~ bye~ ㅡ3ㅡ");
});

// emit 으로 강제로 exit 4번 실행하고
process.emit("exit");
process.emit("exit");
process.emit("exit");
process.emit("exit");
// 콘솔 로그 띄워준 뒤
console.log("running program");

// 끝날때 맨위에 코드 실행
