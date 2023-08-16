async function editFormHandler(event) {
    event.preventDefault();
    const task_name = document.querySelector('#task_name').value;
    const description = document.querySelector('#description').value;

    // window.location gives us access to the URL We then use the .split() method to access the number at the end of the URL and set that equal to id.
    const id = window.location.toString().split('/')
    [window.location.toString().split('/').length -1 ];

    // the controller will handle this put request
    const response = await fetch(`/api/task/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            task_name,
            description,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // confirmation the task was updated successfully
    if (response.ok) {
        document.location.replace(`/task/${id}`);
    } else {
        alert('Failed to update task');
    }
}

// this will be a link to the handlebars (task.handlebars???), there will need a class called 'edit-task-form' in order to link this page.
// there will also need to be a submit button that will link this page's function as well
document.querySelector('.edit-task-form').addEventListener('submit', editFormHandler);