// Step 1: Select Elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Step 2: Add event listener to button
addTaskButton.addEventListener("click", function () {
    // Step 3: Create a new list item
    const taskText = taskInput.value.trim(); // Get input value and remove extra spaces


    if (taskText !== "") { // Ensure it's not empty
        const newTask = document.createElement("li") // Create list item
        newTask.textContent = taskText; // Set text content
        taskList.appendChild(newTask) // Add to task list

        taskInput.value = ""; // Clear input field
    }
});