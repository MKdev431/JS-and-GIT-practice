const addForm = document.querySelector(".add-form");
const searchForm = document.querySelector(".search-form");
const input = document.querySelector("input");
const submitBtn = document.querySelector("button.submitBtn");
const ul = document.querySelector("ul");
const listItems = document.querySelectorAll("li");
const tasksNumber = document.querySelector("h2 span");

const tasksList = [];

const renderList = () => {
  ul.textContent = "";
  tasksList.forEach((element, key) => {
    element.dataset.key = key;
    ul.appendChild(element);
  });
};
const removeTask = (e) => {
  e.target.parentNode.remove();
  const index = e.target.parentNode.dataset.key;
  tasksList.splice(index, 1);
  tasksNumber.textContent = listItems.length;
  renderList();
};

const addTask = (e) => {
  e.preventDefault();
  const givenTask = input.value;
  if (givenTask === "") return;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = givenTask + `<button>Delete</button>`;
  tasksList.push(task);
  ul.appendChild(task);
  input.value = "";
  task.querySelector("button").addEventListener("click", removeTask);
  tasksNumber.textContent = listItems.length;
  renderList();
};

addForm.addEventListener("submit", addTask);

const searchTask = (e) => {
  const query = e.target.value.toLowerCase();
  let tasks = [...listItems];
  ul.textContent = "";
  tasks = tasks.filter((li) => li.textContent.toLowerCase().includes(query));
  tasks.forEach((li) => ul.appendChild(li));
};

searchForm.addEventListener("input", searchTask);
