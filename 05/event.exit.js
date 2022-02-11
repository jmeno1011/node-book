process.on("exit", function (code) {
  console.log("start");
  setTimeout(() => {
    console.log("2sec later");
  }, 2000);
  console.log("end");
});

process.on("uncaughtException", function (error) {
  console.log(`Caught exception :${error}`);
});

setTimeout(() => {
  console.log("Caught Error happen to 2second ago");
}, 2000);

unCaughtFunction();
console.log("error function");
