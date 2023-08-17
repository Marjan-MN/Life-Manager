async function createTasksHandler(event) {
    event.preventDefault();

    document.location.replace('/dashboard/new')
}


document.querySelector('#create-new-Task').addEventListener('click', createTasksHandler);