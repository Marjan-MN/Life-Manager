async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="task-title"]').value;
    const description = document.querySelector('textarea[name="task-description"]').value;

    // window.location gives us access to the URL We then use the .split() method to access the number at the end of the URL and set that equal to id.
    const id = window.location.toString().split('/')
    [window.location.toString().split('/').length -1 ];

    // the controller will handle this put request
    const response = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            description,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // confirmation the task was updated successfully
    if (response.ok) {
        document.location.replace(`/mytasks}`);
    } else {
        alert('Failed to update task');
    }
}

// this will be a link to the handlebars (editTask.handlebars), there will be a class called 'edit-task-form' in order to link this page.
// there will also need to be a submit button that will link this page's function as well
document.querySelector('.edit-task-form').addEventListener('submit', editFormHandler);