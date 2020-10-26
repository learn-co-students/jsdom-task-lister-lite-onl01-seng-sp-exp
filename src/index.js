const taskForm = document.querySelector("#create-task-form");
const taskList = document.querySelector("#tasks");

taskForm.addEventListener("submit", function(e) {
  e.preventDefault();
  // grab user input
  const newTask = document.querySelector("#new-task-description").value; 
  // add to the DOM 
  taskList.innerHTML += `<li> ${newTask}
  <button data-action = "delete"> Delete </button>
  </li>`;

  taskForm.reset();
});


taskList.addEventListener("click", function(e) {
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove();
  }
});