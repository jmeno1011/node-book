var crypto = require("crypto");

// 해시 생성
var shasum = crypto.createHash("sha256");
shasum.update("crypto_hash");
var output = shasum.digest("hex");

// 출력
console.log("crypto_hash : ", output);

// 변수 선언
var key = "시크릿 키";
var input = "패스워드";

// 암호화 aes-192-ccm
var cipher_ccm = crypto.createCipheriv("aes-192-ccm", key);
cipher_ccm.update(input, "utf8", "base64");
var cipherdOutput_ccm = cipher_ccm.final("base64");

// 암호화 해제 aes-192-ccm
var decipher_ccm = crypto.createDecipheriv("aes-192-ccm", key);
decipher_ccm.update(cipherdOutput_ccm, "base64", "utf8");
var decipheredOutput_ccm = decipher_ccm.final("utf8");

// 출력
console.log("원래 문자열 : ", input);
console.log("암호화 : ", cipherdOutput_ccm);
console.log("암호화 해제 : ", decipheredOutput_ccm);

// 암호화 aes-192-gcm
var cipher_gcm = crypto.createCipheriv("aes-192-gcm", key);
cipher_gcm.update(input, "utf8", "base64");
var cipherdOutput_gcm = cipher_gcm.final("base64");

// 암호화 해제 aes-192-gcm
var decipher_gcm = crypto.createDecipheriv("aes-192-ccm", key);
decipher_gcm.update(cipherdOutput_gcm, "base64", "utf8");
var decipheredOutput_gcm = decipher_gcm.final("utf8");

// 출력
console.log("원래 문자열 : ", input);
console.log("암호화 : ", cipherdOutput_gcm);
console.log("암호화 해제 : ", decipheredOutput_gcm);
