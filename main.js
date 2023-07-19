let inputBox = document.getElementById("input");
let todos = document.getElementById("todos");

function newToDo() {
  if (input.value === "") {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    todos.appendChild(li);
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    todos.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "<i class='bx bx-x-circle'></i>"
    li.appendChild(span);
  }
  input.value = ""
}
