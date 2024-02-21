document.addEventListener("DOMContentLoaded", function() {
  let submit = document.getElementById('submit');
  let newTask = document.getElementById('task');

  submit.disabled = true;

  newTask.addEventListener('input', function() {
    submit.disabled = newTask.value.trim() === '';
  });
  
  document.querySelector('form').addEventListener('submit', function(event) {

      event.preventDefault();
      let taskText = newTask.value.trim();
      
      if (taskText === '') return;

      let listItem = document.createElement('li');
      listItem.textContent = taskText;

      document.getElementById('tasks').appendChild(listItem);

      newTask.value = '';
      submit.disabled = true;
  });
  return false;
});

