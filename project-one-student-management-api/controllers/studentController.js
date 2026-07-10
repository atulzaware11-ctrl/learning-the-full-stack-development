// =========================================
// Import Student Data
// =========================================

const students = require("../data/students");

// =========================================
// GET ALL STUDENTS
// =========================================

const getAllStudents = (req, res) => {

    res.status(200).json({
        success: true,
        count: students.length,
        students: students
    });

};

// =========================================
// GET STUDENT BY ID
// =========================================

const getStudentById = (req, res) => {

    // Read ID from URL
    const studentId = parseInt(req.params.id);

    // Find Student
    const student = students.find(
        (item) => item.id === studentId
    );

    // Student Not Found
    if (!student) {

        return res.status(404).json({
            success: false,
            message: "Student not found"
        });

    }

    // Student Found
    res.status(200).json({
        success: true,
        student: student
    });

};

// =========================================
// Export Controllers
// =========================================

module.exports = {
    getAllStudents,
    getStudentById
};