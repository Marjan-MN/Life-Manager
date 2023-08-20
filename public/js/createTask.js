// const Swal = require('sweetalert2')

async function createTasksHandler(event) {
    
    event.preventDefault();
 
    document.location.replace('/mytasks')
}


document.querySelector('#form').addEventListener('submit', createTasksHandler);