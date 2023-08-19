async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="tasks-title"]').value;
    const description = document.querySelector('textarea[name="tasks-description"]').value.trim();

    const response = await fetch(`/api/tasks`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            description
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
document.querySelector('.new-tasks-form').addEventListener('submit', newFormHandler);