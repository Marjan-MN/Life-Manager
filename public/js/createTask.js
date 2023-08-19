async function createTasksHandler(event) {
    event.preventDefault();

    document.location.replace('/dashboard/tasks')
}


document.querySelector('#save-task').addEventListener('click', createTasksHandler);