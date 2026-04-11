//select elements 
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

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

    }

}

function addTaskToDOM(task){

    const li = document.createElement('li'); // Create a new list item
    li.className = 'todo-item'; // Add a class for styling
    li.dataset.id = task.id; // Set the data-id attribute to the task's ID

    li.innerHTML = `<input type="checkbox" class="complete-checkbox">
                <span class="task">${task.text}</span>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>`;

    todoList.appendChild(li); // Append the new task to the list

    todoInput.value = ''; // Clear the input field
}