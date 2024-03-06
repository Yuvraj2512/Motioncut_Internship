document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Load tasks from local storage
    loadTasks();

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            addTask(taskText);
            saveTasksToLocalStorage();
            taskInput.value = "";
        }
    });

    // Task completion
    taskList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("completed");
            saveTasksToLocalStorage();
        }
    });

    // Clear tasks
    document.getElementById("clearTasksBtn").addEventListener("click", function() {
        taskList.innerHTML = "";
        saveTasksToLocalStorage();
    });

    function addTask(taskText) {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        if (tasks) {
            tasks.forEach(task => {
                addTask(task);
            });
        }
    }

    function saveTasksToLocalStorage() {
        const tasks = document.querySelectorAll("#taskList li");
        const taskTexts = [];
        tasks.forEach(task => {
            taskTexts.push(task.textContent);
        });
        localStorage.setItem("tasks", JSON.stringify(taskTexts));
    }
});