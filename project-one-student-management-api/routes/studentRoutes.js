// ======================================================
// Import Express
// ======================================================

const express = require("express");

// Create Router
const router = express.Router();

// ======================================================
// Import Controller Functions
// ======================================================

const {

    getAllStudents,
    getStudentById

} = require("../controllers/studentController");

// ======================================================
// Routes
// ======================================================

// GET All Students
// URL:
// GET /students

router.get("/", getAllStudents);

// ------------------------------------------------------

// GET Student By ID
// URL:
// GET /students/1

router.get("/:id", getStudentById);

// ======================================================
// Export Router
// ======================================================

module.exports = router;