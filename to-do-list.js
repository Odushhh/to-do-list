const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const task = document.getElementById('task').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!task || !date || !time) {
        alert('Please fill in all fields!');
        return;
    }

    // Create a new to-do item object
    const todoItem = {
        task: task,
        date: date,
        time: time,
        completed: false
    };

    // Add the to-do item to the list
    addTodoItem(todoItem);

    // Clear the form fields
    todoForm.reset();
});

function addTodoItem(todoItem) {
    // Create HTML elements for the to-do item
    const li = document.createElement('li');
    const spanTask = document.createElement('span');
    spanTask.classList.add('task');
    spanTask.textContent = todoItem.task;

    const spanDateTime = document.createElement('span');
    spanDateTime.classList.add('date-time');
    spanDateTime.textContent = `${todoItem.date} - ${todoItem.time}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Mark Complete';
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
};

// Append elements to the list item