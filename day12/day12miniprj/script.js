const STORAGE_KEY = "student-dashboard-students";

let students = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]").map((student, index) => ({
    id: student.id || `student-${index + 1}`,
    name: student.name,
    marks: student.marks
}));

const studentNameInput = document.getElementById("studentName");
const studentMarksInput = document.getElementById("studentMarks");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const studentList = document.getElementById("studentList");
const totalStudentsEl = document.getElementById("totalStudents");
const averageMarksEl = document.getElementById("averageMarks");
const topStudentEl = document.getElementById("topStudent");

function saveStudents() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

function updateStats() {
    if (!totalStudentsEl || !averageMarksEl || !topStudentEl) return;

    if (students.length === 0) {
        totalStudentsEl.textContent = "0";
        averageMarksEl.textContent = "0";
        topStudentEl.textContent = "None";
        return;
    }

    const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
    const average = (totalMarks / students.length).toFixed(2);
    const topper = students.reduce((top, student) => (student.marks > top.marks ? student : top), students[0]);

    totalStudentsEl.textContent = students.length;
    averageMarksEl.textContent = average;
    topStudentEl.textContent = topper.name;
}

function renderStudents(filteredStudents = students, showDelete = true) {
    if (!studentList) return;

    if (filteredStudents.length === 0) {
        studentList.innerHTML = '<div class="empty-state">No students found.</div>';
        return;
    }

    studentList.innerHTML = filteredStudents.map((student) => `
        <div class="card">
            <h3>${student.name}</h3>
            <p>Marks : ${student.marks}</p>
            ${showDelete ? `<button onclick="deleteStudent('${student.id}')">Delete</button>` : ""}
        </div>
    `).join("");
}

function addStudent() {
    const name = studentNameInput.value.trim();
    const marks = Number(studentMarksInput.value);

    if (name === "" || isNaN(marks)) {
        alert("Please enter valid data.");
        return;
    }

    students.push({
        id: `student-${Date.now()}`,
        name,
        marks
    });

    saveStudents();
    renderStudents();
    updateStats();

    studentNameInput.value = "";
    studentMarksInput.value = "";
}

function deleteStudent(studentId) {
    students = students.filter((student) => student.id !== studentId);
    saveStudents();
    renderStudents();
    updateStats();
}

function goToSearchPage() {
    const keyword = searchInput.value.trim();
    const query = keyword ? `?query=${encodeURIComponent(keyword)}` : "";
    window.location.href = `search.html${query}`;
}

function initDashboardPage() {
    if (addBtn) {
        addBtn.addEventListener("click", addStudent);
    }

    if (searchBtn) {
        searchBtn.addEventListener("click", goToSearchPage);
    }

    if (searchInput) {
        searchInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                goToSearchPage();
            }
        });
    }

    renderStudents();
    updateStats();
}

function initStudentListPage() {
    renderStudents(students, true);
    updateStats();
}

function initSearchPage() {
    const params = new URLSearchParams(window.location.search);
    const query = (params.get("query") || "").toLowerCase();

    if (searchInput) {
        searchInput.value = params.get("query") || "";
    }

    const filteredStudents = students.filter((student) => student.name.toLowerCase().includes(query));
    renderStudents(filteredStudents, false);
    updateStats();
}

document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;

    if (page === "dashboard") {
        initDashboardPage();
    } else if (page === "student-list") {
        initStudentListPage();
    } else if (page === "search") {
        initSearchPage();
    }
});

console.log("Student Dashboard Loaded Successfully");