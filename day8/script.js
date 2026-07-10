// =============================
// Day 8 - JavaScript Fundamentals
// =============================

// Console Output
console.log("Welcome to Day 8!");

// Variables
let studentName = "Alex";
let age = 22;
const country = "India";
let isStudent = true;
let salary;
let address = null;

// Display Variables
console.log(studentName);
console.log(age);
console.log(country);
console.log(isStudent);
console.log(salary);
console.log(address);

// Data Types
console.log(typeof studentName);
console.log(typeof age);
console.log(typeof isStudent);

// Arithmetic
let a = 20;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** 2);

// Assignment
let score = 50;
score += 20;
console.log(score);

// Comparison
console.log(10 > 5);
console.log(10 == "10");
console.log(10 === "10");

// Logical
console.log(true && true);
console.log(true || false);
console.log(!true);

// Template Literal
console.log(`Student: ${studentName}, Age: ${age}`);

// User Input alert at main bowser 
let firstNumber = Number(prompt("Enter First Number"));
let secondNumber = Number(prompt("Enter Second Number"));

console.log("Addition:", firstNumber + secondNumber);

function calculate(){

    let firstNumber =
        Number(document.getElementById("num1").value);

    let secondNumber =
        Number(document.getElementById("num2").value);

    let answer = firstNumber + secondNumber;

    document.getElementById("result").textContent =
        "Answer : " + answer;
}