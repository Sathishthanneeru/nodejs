// console.log("hi");
// console.log("hello");
// console.log("dfhghjjk");
// console.log("sdfghjkl;");
// console.log("sdfghjkl;");
// console.log("asdfgjk");
// const { fun1, x } = require("./index1.js");
// const { cal } = require("./index2.js");
// console.log(fun1());
// console.log(x);
// let a = 10;
// let b = 20;
// console.log(cal(a, b));
// const data = require("./data.json");
// console.log(data);

// // creating a server.

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.write("hello sathish");
//   res.end("cretaing a server");
// });
// server.listen("3101",() => {
//   console.log("server running running........");
// });



// const http=require("http");
// const server = http.createServer((req, res) => {
//   res.writeHead(201, "hello sathish", { "content-type": "application/json" });
//   req.write(JSON.stringify());
//   res.end();
// });
// server.listen("3101", () => {
//   console.log("server running.....");
// });




// for get

const http=require("http");
const { json } = require("stream/consumers");
const server=http.createServer((req,res)=>{
  if(req.method=="/GET")
    if(req.url=="kinnara"){
      req.write(201,"ok",{"content-type":"aplication/json"})
      req.write(JSON.stringify({"movie name":"kinnara" , screen:"one"}))
      res.end()
    }
    else if(req.url=="/THANDEL"){
      req.write(201,"ok",{"content-type":"aplication/json"})
      req.write(JSON.stringify({"movie name":"thandel" , screen:"two"}))
      res.end()
    }
    else{
      req.write(201,"ok",{"content-type":"aplication/json"})
      req.write(JSON.stringify({"message":"movie not found"}))
      res.end()
    }
     
  
});
server.listen("3102",()=>{
  console.log("server running....")
})