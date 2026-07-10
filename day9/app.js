// ===============================================
// DAY 9 - EXPRESS.JS COMPLETE APP
// ===============================================

// -----------------------------------------------
// STEP 1 : Import Express
// -----------------------------------------------

const express = require("express");

// -----------------------------------------------
// STEP 2 : Create Express Application
// -----------------------------------------------

const app = express();

// -----------------------------------------------
// STEP 3 : Built-in Middleware
// Converts JSON into JavaScript Object
// -----------------------------------------------

app.use(express.json());

// -----------------------------------------------
// STEP 4 : Serve Static Files
// Anything inside "public" folder becomes accessible
// Example:
// localhost:3000/style.css
// localhost:3000/logo.png
// -----------------------------------------------

app.use(express.static("public"));

// -----------------------------------------------
// STEP 5 : Custom Middleware
// Runs before every route
// -----------------------------------------------

app.use((req, res, next) => {

    console.log("-------------------------");
    console.log("New Request Received");

    console.log("Method :", req.method);
    console.log("URL    :", req.url);

    next();

});

// ===============================================
// HOME ROUTE
// ===============================================

app.get("/", (req, res) => {

    res.send("Welcome to Express.js");

});

// ===============================================
// ABOUT ROUTE
// ===============================================

app.get("/about", (req, res) => {

    res.send("About Page");

});

// ===============================================
// CONTACT ROUTE
// ===============================================

app.get("/contact", (req, res) => {

    res.send("Contact Page");

});

// ===============================================
// JSON RESPONSE
// ===============================================

app.get("/student", (req, res) => {

    res.send({
        name: "Alice",
        age: 21,
        course: "Full Stack Development"
    });

});

// ===============================================
// ROUTE PARAMETERS
// localhost:3000/student/101
// ===============================================

app.get("/student/:id", (req, res) => {

    const studentID = req.params.id;

    res.send(`Student ID is ${studentID}`);

});

// ===============================================
// MULTIPLE PARAMETERS
// localhost:3000/student/101/Alice
// ===============================================

app.get("/student/:id/:name", (req, res) => {

    const id = req.params.id;
    const name = req.params.name;

    res.send({
        id,
        name
    });

});

// ===============================================
// QUERY PARAMETERS
// localhost:3000/search?name=John&age=20
// ===============================================

app.get("/search", (req, res) => {

    console.log(req.query);

    res.send(req.query);

});

// ===============================================
// POST REQUEST
// ===============================================

let students = [];

app.post("/students", (req, res) => {

    const student = req.body;

    students.push(student);

    res.send({
        message: "Student Added Successfully",
        data: student
    });

});

// ===============================================
// GET ALL STUDENTS
// ===============================================

app.get("/students", (req, res) => {

    res.send(students);

});

// ===============================================
// GET SINGLE STUDENT
// localhost:3000/students/0
// ===============================================

app.get("/students/:index", (req, res) => {

    const index = req.params.index;

    res.send(students[index]);

});

// ===============================================
// UPDATE STUDENT
// ===============================================

app.put("/students/:index", (req, res) => {

    const index = req.params.index;

    students[index] = req.body;

    res.send({
        message: "Student Updated",
        student: students[index]
    });

});

// ===============================================
// DELETE STUDENT
// ===============================================

app.delete("/students/:index", (req, res) => {

    const index = req.params.index;

    students.splice(index, 1);

    res.send("Student Deleted");

});

// ===============================================
// 404 Route
// Must Always Be Last
// ===============================================

app.use((req, res) => {

    res.status(404).send("Page Not Found");

});

// ===============================================
// Start Server
// ===============================================

app.listen(3000, () => {

    console.log("----------------------------------");
    console.log("Server Running Successfully");
    console.log("http://localhost:3000");
    console.log("----------------------------------");

});