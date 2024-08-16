const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const removeTaskButton = document.getElementById('remove-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', addTask);
removeTaskButton.addEventListener('click', removeTask);

function addTask() {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    const taskListItem = document.createElement('LI');
    taskListItem.textContent = newTask;
    taskList.appendChild(taskListItem);
    newTaskInput.value = '';
  }
}

function removeTask() {
  const taskListItems = taskList.children;
  if (taskListItems.length > 0) {
    taskList.removeChild(taskListItems[taskListItems.length-1]);
  }
}

taskList.addEventListener('click', toggleTask);

function toggleTask(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('done');
  }
}



