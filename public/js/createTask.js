// const Swal = require('sweetalert2')

async function createTasksHandler() {
    
    //event.preventDefault();
 
    document.location.replace('/dashboard/tasks')
}


document.querySelector('#save-task').addEventListener('click', createTasksHandler);