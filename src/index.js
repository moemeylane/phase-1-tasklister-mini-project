document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;

    if (taskDescription.trim() === "") {
      alert("Please enter a task description!");
      return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    taskList.appendChild(taskItem);

    taskInput.value = "";
  });
});

