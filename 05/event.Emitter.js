var EventEmitter = require("events");

var custom = new EventEmitter();

// 이벤트 연결
custom.on("tick", function (code) {
  console.log("run event");
});

// 이벤트를 강제로 발생
custom.emit("tick");
