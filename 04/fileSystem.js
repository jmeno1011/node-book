var fs = require("fs");
const path = require("path");

// // 파일을 비동기적으로 읽습니다.
// fs.readFile(file, encoding, callback);
// // 파일을 동기적으로 읽습니다.
// fs.readFileSync(file, encoding);
// // 파일을 비동기적으로 씁니다.
// fs.writeFile(file, data, encoding, callback);
// // 파일을 동기적으로 씁니다.
// fs.writeFileSync(file, data, encoding);

// 파일을 읽습니다.
try {
  //  readFileSync( file경로 , encoding )
  var text = fs.readFileSync(
    path.resolve(__dirname, "./files/textfile.txt"),
    "utf8"
  );
  console.log("readFileSync : ", text);
} catch (e) {
  console.log("ERROR : ", e);
}

// 파일을 읽습니다.
fs.readFile(
  path.resolve(__dirname, "./files/textfile.txt"),
  "utf8",
  (error, data) => {
    // if (error) {
    //   console.log("ERROR : ", error);
    // } else {
    console.log("readFile : ", data);
    // }
  }
);

//파일을 쓸때 들어갈 내용
var data = "Hello World .. !";

// 파일을 씁니다.
fs.writeFile(
  path.resolve(__dirname, "./files/textFileOtherWrite.txt"),
  data,
  "utf8",
  (error) => {
    if (error) {
      console.log("ERROR : ", error);
    } else {
      console.log("WRITE FILE ASYNC COMPLETE");
    }
  }
);

// 파일을 씁니다.
try {
  fs.writeFileSync(
    path.resolve(__dirname, "./files/textFileOtherWriteSync.txt"),
    data,
    "utf8"
  );
  console.log("WRITE FILE SYNC COMPLETE");
} catch (e) {
  console.log("ERROR : ", e);
}
