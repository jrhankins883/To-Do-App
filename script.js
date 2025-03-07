// Step 1: Select Elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const completedList = document.getElementById("completedList");

// Function to create a new task item
function addTask() {
    const taskText = taskInput.value.trim(); // Get input value and remove extra space
    if (taskText === "") return; // Prevents adding empty tasks

    const taskItem = document.createElement("li"); // Create list item
    taskItem.textContent = taskText; // Set text content

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.style.marginLeft = "10px";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";

    // Move task to completed list when button is clicked
    completeButton.addEventListener("click", function () {
        completeButton.remove(); // Remove the complete button
        completedList.appendChild(taskItem);
    });

    // Remove the task when delete button is clicked
    deleteButton.addEventListener("click", function () {
        taskItem.remove();
    });

    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = ""; // Clear input field
}

// Step 2: Add event listener to button
addTaskButton.addEventListener("click", addTask);

// Step 3: Allow adding task with "Enter" key
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});