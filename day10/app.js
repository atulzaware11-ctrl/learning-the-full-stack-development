 
const express = require("express");

const app = express();

app.use(express.json());

let students = [];


// Create
app.post("/students", (req, res) => {
    students.push(req.body);

    res.status(201).send({
        message: "Student Created",
        student: req.body
    });
});

// Read All
app.get("/students", (req, res) => {
    res.status(200).send(students);
});


app.get("/students/:id", (req, res) => {
    const id = req.params.id;

    if (!students[id]) {
        return res.status(404).send({
            success: false,
            message: "Student Not Found"
        });
    }

    res.send({
        success: true,
        data: students[id]
    });
});
// Read One
app.get("/students/:id", (req, res) => {
    const id = req.params.id;
    res.send(students[id]);
});

// Update
app.put("/students/:id", (req, res) => {
    const id = req.params.id;

    students[id] = req.body;

    res.send({
        message: "Updated",
        student: students[id]
    });
});

// Delete
app.delete("/students/:id", (req, res) => {
    const id = req.params.id;

    students.splice(id, 1);

    res.send({
        message: "Deleted"
    });
});

app.listen(3000, () => {
    console.log("Server Running...");
});