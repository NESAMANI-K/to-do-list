function addTask(priority) {
    const taskText = prompt("Enter the task:");
    if (taskText) {
        const taskList = document.getElementById(`${priority}-priority-list`);
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.textContent = taskText;
        
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.className = 'complete-btn';
        completeBtn.onclick = () => markAsComplete(taskItem);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => taskList.removeChild(taskItem);

        taskItem.appendChild(completeBtn);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    }
}

function markAsComplete(taskItem) {
    taskItem.classList.toggle('completed');
}
