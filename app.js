//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listener
todoButton.addEventListener("click", addTodo);
todoButton.addEventListener("click", deleteCheck);

//Functions
function addTodo(event) {
  //Prevent form from submiting
  event.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //CHECK Complete BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //CHECK trash BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //APPEND LIST
  todoList.appendChild(todoDiv);
  //Clear Todo INPUT VALUE
  todoInput.value = "";
}

function deleteCheck(e) {
  console.log(e.target);
  //   const item = event.target;
  //   //DELETE TODO
  //   if (item.classList[0] === "trash-btn") {
  //     const todo = item.parentElement;
  //     todo.remove();
  //   }
}
