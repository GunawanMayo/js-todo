const todoInputText = document.getElementById('input_todo');
const todoAddButton = document.getElementById('add_todo');
const todoList = document.getElementById("todo_list");

function checkIfEmpty() {
  const emptyMessage = document.getElementById("empty_message");
  if (todoList.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}

todoAddButton.addEventListener('click', () => {
  const inputValue = todoInputText.value.trim();

  if (inputValue === "") return;

  const listItem = document.createElement("li");
  listItem.className = "todo-li";
  listItem.innerHTML = inputValue;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.type = "button";

  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  todoInputText.value = "";

  checkIfEmpty();

  deleteButton.addEventListener('click', () => {
    console.log("clicking delete button");
    listItem.remove();
    checkIfEmpty();
  });
});

// checkIfEmpty();