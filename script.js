 // script.js
 // Section 1: TODOs
 // TODO: Register submissions from the user on the form.
 // TODO: Determine the value of the data submitted and add it to a JavaScript array calle
 // TODO: Call the render function to update the table with the new tasks.

  // script.js


 // Section 2: App State Variables

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskForm = document.getElementById("taskForm")
const taskTable = document.getElementById("taskTable")


function handleSubmission(event){
    event.preventDefault()
     // TODO: Get form input values
    const taskName = document.getElementById("taskName").value
    const taskDescription = document.getElementById("taskDescription").value
    const taskDeadline = document.getElementById("taskDeadline").value
     // TODO: Validate input fields
    if (taskName == "" || taskDeadline == ""){
        alert("Task Name or Task Deadline Empty")
    }
     // TODO: Update the tasks array
    tasks.push({name: taskName, description: taskDescription, deadline: taskDeadline})
    localStorage.setItem('tasks', JSON.stringify(tasks))
    
     render()
}

 // Function to render tasks in the table

 // TODO: Use array methods to create a new table row of data for each item in the arr
function render() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskTable.innerHTML = tasks.map(task => `
        <tr>
            <th>${task.name}</th>
            <th>${task.description}</th>
            <th>${task.deadline}</th>
            <td><button onClick="markTaskComplete(this)">Complete</button></td>
            <td><button onclick="removeTask(this)">Remove</button></td>
        </tr>
    `).join('');
}
 // Function to initialize the table
 function init() {
 render(); // Call the render function
 }

taskForm.addEventListener('submit', handleSubmission);
init();

