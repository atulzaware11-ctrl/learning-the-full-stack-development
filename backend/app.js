// console.log("hello backend")
// const cowsay=require("cowsay");

// console.log(
// cowsay.say({
// text:"Hello"
// })
// );

// const add=require("./calculator");

// console.log(add(5,8));










// const fs=require("fs");
// fs.writeFileSync(
// "note.txt",
// "Learning Node"
// );

// const data=fs.readFileSync(
// "note.txt",
// "utf-8"
// );

// // fs.unlinkSync("note.txt");
// // console.log(data);
// fs.appendFileSync(
// "note.txt",
// "\nDay 8"
// );
// fs.readFile(
// "note.txt",
// "utf8",
// (err,data)=>{

// console.log(data);

// });

// console.log("Running...");

// const http = require("http");
// 
// const server=http.createServer(
// (req,res)=>{

// res.end("Hello World");

// });server.listen(3000);


const http = require("http");

const server = http.createServer((req, res) => {
  console.log("A request arrived!");
  console.log(req.url);

  res.end("Hello World");
});


server.listen(3000);
