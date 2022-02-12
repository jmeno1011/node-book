var rint = require("./rint");

rint.timer.on("tick", function (code) {
  console.log("run Event");
});
