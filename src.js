function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task !== "") {
    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = task;

    const btnContainer = document.createElement("div");
    btnContainer.className = "btn-group";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editTask(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(deleteBtn);

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(taskText);
    li.appendChild(btnContainer);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}

function deleteTask(btn) {
  btn.closest("li").remove();
}

function editTask(btn) {
  const li = btn.closest("li");
  const span = li.querySelector(".task-text");
  const current = span.textContent;
  const updated = prompt("Edit task:", current);
  span.textContent = updated.trim();
}

