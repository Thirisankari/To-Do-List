// Function to add a new task
function addTask() {
    let taskInput = document.getElementById('new-task-input');
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById('todo-list');

    // Create a new list item
    let newTask = document.createElement('li');
    newTask.innerHTML = `
        <span>${taskText}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    // Add the new task to the list
    taskList.appendChild(newTask);

    // Clear the input field
     taskInput.value = "";
}

// Function to delete a task
function deleteTask(button) {
    let taskToDelete = button.parentElement;
    taskToDelete.remove();
}

// Function to edit a task
function editTask(button) {
    let taskToEdit = button.parentElement;
    let taskText = taskToEdit.querySelector('span').innerText;

    // Get new task input from the user
    let newTaskText = prompt("Edit your task:", taskText);
    
    if (newTaskText === null || newTaskText.trim() === "") {
        return;
    }

    taskToEdit.querySelector('span').innerText = newTaskText;
}
