/* ====================================================

        DAY 12
        MODERN JAVASCRIPT (ES6)

==================================================== */

console.log("Welcome to Day 12");

/* ====================================================

Topic 1 : let and const

Meaning

let

Variable

Can Change

const

Constant

Cannot Change

==================================================== */

// let Example

let studentName="Atul";

studentName="Rahul";

// const Example

const college="ABC Engineering College";

// Display Output

document.getElementById("output1").innerHTML=

`

Student Name : ${studentName}

<br>

College : ${college}

`;

/* ====================================================

Topic 2 : Template Literals

Meaning

Uses Backticks

Allows Variables inside String

Syntax

${variable}

==================================================== */

const language="JavaScript";

const version="ES6";

document.getElementById("output2").innerHTML=

`

I am Learning ${language}

<br>

Version : ${version}

`;

/* ====================================================

Topic 3 : Arrow Functions

Meaning

Short Form of Function

Old

function add(){}

New

()=>{}

==================================================== */

// Arrow Function

const greet=()=>{

return "Welcome To Modern JavaScript";

};

document.getElementById("output3").innerHTML=

greet();

/* ====================================================

Topic 4 : Default Parameters

Meaning

If User Doesn't Pass Value

Default Value Used

==================================================== */

function welcome(name="Student"){

return `Welcome ${name}`;

}

document.getElementById("output4").innerHTML=

welcome()

+

"<br><br>"

+

welcome("Atul");

/* ====================================================

Topic 5 : Rest Operator

Meaning

Collects Multiple Values

...

==================================================== */

function totalMarks(...marks){

let total=0;

for(let mark of marks){

total+=mark;

}

return total;

}

document.getElementById("output5").innerHTML=

`

Marks = 85,90,78,95

<br>

Total = ${totalMarks(85,90,78,95)}

`;

/* ====================================================

Topic 6 : Spread Operator

Meaning

Copies or Expands Arrays and Objects

Syntax

...

==================================================== */

// Original Array

const numbers=[10,20,30];

// Copy Array

const copiedNumbers=[...numbers];

// Add New Values

const newNumbers=[...numbers,40,50];

document.getElementById("output6").innerHTML=

`

Original Array : ${numbers}

<br><br>

Copied Array : ${copiedNumbers}

<br><br>

New Array : ${newNumbers}

`;

/* ====================================================

Topic 7 : Object Destructuring

Meaning

Extract Values

from Object

==================================================== */

const student={

name:"Atul",

age:20,

branch:"Computer Engineering"

};

// Destructuring

const {name,age,branch}=student;

document.getElementById("output7").innerHTML=

`

Name : ${name}

<br>

Age : ${age}

<br>

Branch : ${branch}

`;
/* ====================================================

Topic 8 : Array Destructuring

Meaning

Extract Values

from Array

==================================================== */

const colors=[

"Red",

"Green",

"Blue"

];

// Destructuring

const [first,second,third]=colors;

document.getElementById("output8").innerHTML=

`

First : ${first}

<br>

Second : ${second}

<br>

Third : ${third}

`;
/* ====================================================

Topic 9 : Enhanced Object Literals

Meaning

Modern Way

of Creating Objects

==================================================== */

const studentName="Atul";

const cgpa=9.25;

// Enhanced Object

const studentInfo={

studentName,

cgpa

};

document.getElementById("output9").innerHTML=

`

Student Name : ${studentInfo.studentName}

<br>

CGPA : ${studentInfo.cgpa}

`;
/* ====================================================

Topic 10 : for...of Loop

Meaning

Iterates

through Arrays

==================================================== */

const subjects=[

"HTML",

"CSS",

"JavaScript",

"React",

"Node.js"

];

let result="";

for(const subject of subjects){

result+=subject+"<br>";

}

document.getElementById("output10").innerHTML=result;
/* ===================================================

Topic 11 : map()

Meaning

Transforms every element

Returns NEW Array

Original Array remains unchanged

=================================================== */

const marks=[

80,

90,

75,

95

];

// Add bonus marks

const updatedMarks=marks.map(

(mark)=>mark+5

);

document.getElementById("output11").innerHTML=

`

Original Marks :

${marks}

<br><br>

Bonus Marks :

${updatedMarks}

`;
/* ===================================================

Topic 12 : filter()

Meaning

Returns only matching values

=================================================== */

const students=[

"Rahul",

"Atul",

"Amit",

"Ankit"

];

// Filter names starting with A

const filteredStudents=

students.filter(

(student)=>student.startsWith("A")

);

document.getElementById("output12").innerHTML=

`

Students :

${students}

<br><br>

Filtered :

${filteredStudents}

`;
/* ===================================================

Topic 13 : find()

Meaning

Returns FIRST matching element

=================================================== */

const employees=[

{

id:1,

name:"Rahul"

},

{

id:2,

name:"Atul"

},

{

id:3,

name:"Amit"

}

];

const employee=

employees.find(

(emp)=>emp.id===2

);

document.getElementById("output13").innerHTML=

`

Employee ID : ${employee.id}

<br>

Employee Name : ${employee.name}

`;
/* ===================================================

Topic 14 : reduce()

Meaning

Reduces whole array

into single value

=================================================== */

const expenses=[

500,

800,

1200,

400

];

const totalExpense=

expenses.reduce(

(total,current)=>{

return total+current;

},

0

);

document.getElementById("output14").innerHTML=

`

Expenses :

${expenses}

<br><br>

Total Expense :

${totalExpense}

`;