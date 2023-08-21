async function deleteFormHandler(event) {
    event.preventDefault();
    
    const id = window.location.toString().split('/')
    [window.location.toString().split('/').length -1 ];

    const response = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace(`/tasks/${id}`);
    } else {
        alert('Failed to update task');
    }
}

// document.querySelector('delete-post-btn').addEventListener('click', deleteFormHandler);
document
  .querySelector('.delete-button')
  .addEventListener('click', delButtonHandler);