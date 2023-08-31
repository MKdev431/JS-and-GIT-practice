const addFormInput = document.querySelector(".add-form input");
const searchForm = document.querySelector(".search-form input");
const submitBtn = document.querySelector(".submitBtn");
const ul = document.querySelector("ul");
const taskCount = document.querySelector("h2 span");
const liItems = document.getElementsByClassName("task");

const searchTask = (e) => {
  e.preventDefault();
  const inputText = e.target.value.toLowerCase();
  let tasks = [...liItems];
  tasks = tasks.filter((index) => index.textContent.toLowerCase().includes(inputText));
  ul.textContent = "";
  // console.log(tasks);
  tasks.forEach((index) => ul.appendChild(index));
  taskCount.textContent = liItems.length;
};

const removeTask = (e) => {
  e.target.parentNode.remove();
  taskCount.textContent = liItems.length;
};

const addTask = (e) => {
  e.preventDefault();
  const newTask = addFormInput.value;
  if (newTask === "") return;
  const li = document.createElement("li");
  li.innerHTML = newTask + "<button>delete</button>";
  li.className = "task";
  // tasks.push(li);
  ul.appendChild(li);
  addFormInput.value = "";
  taskCount.textContent = document.querySelectorAll("li.task").length;
  li.querySelector("button").addEventListener("click", removeTask);
};

submitBtn.addEventListener("click", addTask);
searchForm.addEventListener("input", searchTask);
