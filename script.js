// Step 1: Select Elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Step 2: Add event listener to button
addTaskButton.addEventListener("click", function () {
    // Step 3: Create a new list item
    const taskText = taskInput.value.trim(); // Get input value and remove extra spaces
    if (taskText === "") return; // Prevent adding empty tasks

    const taskItem = document.createElement("li") // Create list item
    taskItem.textContent = taskText; // Set text content

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.style.marginLeft = "10px";

    taskItem.appendChild(completeButton);
    taskList.appendChild(taskItem) // Add to task list

    taskInput.value = ""; // Clear input field
    
});