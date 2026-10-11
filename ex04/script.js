const input = document.getElementById("input");
const addButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function updateCount() {
    taskCount.textContent = taskList.children.length;
}

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    completeButton.addEventListener("click", function () {
        taskTextSpan.classList.add("completed");
        completeButton.remove();
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
        updateCount();
    });

    li.appendChild(taskTextSpan);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    input.value = "";
    updateCount();
}

addButton.addEventListener("click", addTask);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
