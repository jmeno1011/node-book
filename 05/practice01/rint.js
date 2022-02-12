var EventEmitter = require("events");
exports.timer = new EventEmitter();

// setInterval 로 emit해서 강제로 실행시킴
setInterval(() => {
  exports.timer.emit("tick");
}, 1000);
