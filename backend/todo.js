const fs = require("fs");

function addTask(task) {
  fs.appendFileSync("tasks.txt", task + "\n");
  console.log("Task Added");
}

function showTasks() {
  const data = fs.readFileSync("tasks.txt", "utf8");
  console.log(data);
}

addTask("Learn Node.js");
addTask("Practice Modules");
showTasks();