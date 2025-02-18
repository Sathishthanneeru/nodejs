console.log("hi");
console.log("hello");
console.log("dfhghjjk");
console.log("sdfghjkl;");
console.log("sdfghjkl;");
console.log("asdfgjk");
const { fun1, x } = require("./index1.js");
const { cal } = require("./index2.js");
console.log(fun1());
console.log(x);
let a = 10;
let b = 20;
console.log(cal(a, b));
const data = require("./data.json");
console.log(data);

// creating a server.

const http = require("http");
const server = http.createServer((req, res) => {
  res.write("hello sathish");
  res.end("cretaing a server");
});
server.listen("3101","192.168.142.65",() => {
  console.log("server running running........");
});
