const express = require("express");

const app = express();

app.use(express.json());

// Fake Database

let students = [

{
id:1,
name:"John",
age:20
},

{
id:2,
name:"Alice",
age:22
}

];

// ==============================
// GET ALL
// ==============================

app.get("/students",(req,res)=>{

res.status(200).json(students);

});

// ==============================
// GET ONE
// ==============================

app.get("/students/:id",(req,res)=>{

const id=parseInt(req.params.id);

const student=students.find(s=>s.id===id);

if(!student){

return res.status(404).json({

message:"Student Not Found"

});

}

res.status(200).json(student);

});

// ==============================
// POST
// ==============================

app.post("/students",(req,res)=>{

const newStudent=req.body;

students.push(newStudent);

res.status(201).json({

message:"Student Created",

student:newStudent

});

});

// ==============================
// PUT
// ==============================

app.put("/students/:id",(req,res)=>{

const id=parseInt(req.params.id);

const index=students.findIndex(s=>s.id===id);

if(index===-1){

return res.status(404).json({

message:"Student Not Found"

});

}

students[index]=req.body;

res.status(200).json({

message:"Updated",

student:req.body

});

});

// ==============================
// PATCH
// ==============================

app.patch("/students/:id",(req,res)=>{

const id=parseInt(req.params.id);

const student=students.find(s=>s.id===id);

if(!student){

return res.status(404).json({

message:"Student Not Found"

});

}

Object.assign(student,req.body);

res.json({

message:"Partially Updated",

student

});

});

// ==============================
// DELETE
// ==============================

app.delete("/students/:id",(req,res)=>{

const id=parseInt(req.params.id);

students=students.filter(s=>s.id!==id);

res.json({

message:"Deleted Successfully"

});

});

// ==============================

app.listen(3000,()=>{

console.log("REST API Running");

});

