//select elements 
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

document.addEventListener('DOMContentLoaded', loadtask);

function loadtask(){

    const tasks = getTasksFromLocalStorage(); // Retrieve tasks from local storage


    tasks.forEach(task => {
        addTaskToDOM(task); // Add each task to the DOM
    })
}


//add event listener to the form
// Event Listener for adding a new task
todoForm.addEventListener('submit', addTask)

//Define the addTask Function

function addTask(e){
    e.preventDefault(); // Prevent form submission

    const taskText = todoInput.value.trim(); // Get the input value and trim whitespace

    if(taskText !== ''){

        const task = {
            id: Date.now(), // Unique ID for the task
            text: taskText,
            completed: false
        }
        addTaskToDOM(task); // Add the task to the DOM
        saveTaskToLocalStorage(task); // Save the task to local storage

    }

}

function addTaskToDOM(task){

    const li = document.createElement('li'); // Create a new list item
    li.className = `todo-item${task.completed ? ' completed' : ''}`; // Add class based on completion status
    li.dataset.id = task.id; // Set the data-id attribute to the task's ID

    li.innerHTML = `<input type="checkbox" class="complete-checkbox" ${task.completed ? 'checked' : ''}>
                <span class="task">${task.text}</span>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>`;

    todoList.appendChild(li); // Append the new task to the list

    todoInput.value = ''; // Clear the input field
}

function saveTaskToLocalStorage(task){

    const oldTask = getTasksFromLocalStorage(); // Retrieve existing tasks from local storage 
    oldTask.push(task); // Add the new task to the array

    localStorage.setItem("task", JSON.stringify(oldTask)); // Save the task to local storage as a JSON string

}

function getTasksFromLocalStorage(){
    
    const oldTask = JSON.parse(localStorage.getItem('task') || '[]'); // Retrieve existing tasks from local storage or initialize an empty array
    return oldTask; // Return the array of tasks
}