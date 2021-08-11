const compButtonHandler = async (event) => {
  event.preventDefault();

  const is_completed = document.querySelector('.task-complete').value.trim();
  
  if(!is_completed) {
    const response = await fetch (`/api/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify({is_completed: true}),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log (is_completed)
     if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  };

  document
  .querySelector('.task-complete')
  .addEventListener('click', compButtonHandler);
