const addForm = document.querySelector(".add-form");
const searchForm = document.querySelector(".search-form");
const input = document.querySelector("input");
const submitBtn = document.querySelector("button.submitBtn");
const ul = document.querySelector("ul");
const listItems = document.getElementsByClassName("task");
const h2 = document.querySelector("h2 span");

const taskList = [];

const removeTask = (e) => {
  e.target.parentNode.remove();
  h2.textContent = listItems.length;
};

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const givenTask = input.value;
  if (givenTask === "") return;
  taskList.push(givenTask);
  const task = document.createElement("li");
  task.innerHTML = givenTask + `<button>Delete</button>`;
  task.className = "task";
  ul.appendChild(task);
  input.value = "";
  task.addEventListener("click", removeTask);
  h2.textContent = listItems.length;
});
