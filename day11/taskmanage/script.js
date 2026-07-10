/* ========================================= */
/* Selecting HTML Elements */
/* ========================================= */

const taskInput = document.getElementById("taskInput"); // reference the task input field in the HTML
const addTask = document.getElementById("addTask"); // reference the button used to add a new task
const taskList = document.getElementById("taskList"); // reference the container where tasks are shown

/* ========================================= */
/* Function : Add Task */
/* ========================================= */

function createTask(){
    const taskText = taskInput.value.trim(); // get text value from input and remove whitespace from both ends

    if(taskText === ""){
        alert("Please Enter a Task"); // inform user if they try to add an empty task
        return; // exit the function early when input is invalid
    }

    const li = document.createElement("li"); // create a list item element for the new task
    li.classList.add("task"); // add a CSS class to style the task item

    const span = document.createElement("span"); // create a span element to hold the task text
    span.innerText = taskText; // set the displayed task text inside the span

    const buttonGroup = document.createElement("div"); // create a container for action buttons
    buttonGroup.classList.add("button-group"); // add a CSS class to style button layout

    const completeButton = document.createElement("button"); // create the button for marking completion
    completeButton.innerText = "✓"; // set button text to a check mark icon
    completeButton.classList.add("complete"); // add a CSS class for complete button styling

    const deleteButton = document.createElement("button"); // create the button for deleting the task
    deleteButton.innerText = "🗑"; // set button text to a trash icon
    deleteButton.classList.add("delete"); // add a CSS class for delete button styling

    completeButton.addEventListener("click", function(){
        span.classList.toggle("completed"); // toggle completed styling on the task text
    });

    deleteButton.addEventListener("click", function(){
        li.remove(); // remove the entire task item from the DOM
    });

    buttonGroup.appendChild(completeButton); // add the complete button to the button group
    buttonGroup.appendChild(deleteButton); // add the delete button to the button group

    li.appendChild(span); // append the task text span to the task item
    li.appendChild(buttonGroup); // append the action buttons container to the task item

    taskList.appendChild(li); // append the completed task item to the visible task list

    taskInput.value = ""; // clear the input field after adding the task
    taskInput.focus(); // return focus to the input field for the next task entry
}

/* ========================================= */
/* Button Click */
/* ========================================= */

addTask.addEventListener("click",createTask);

/* ========================================= */
/* Enter Key Support */
/* ========================================= */

taskInput.addEventListener("keypress",function(event){

    if(event.key==="Enter"){

        createTask();

    }

});