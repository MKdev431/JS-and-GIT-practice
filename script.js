const addFormInput = document.querySelector(".add-form input");
const searchFormInput = document.querySelector(".search-form input");
const submitBtn = document.querySelector(".submitBtn");
const ul = document.querySelector("ul");
const taskCount = document.querySelector("h2 span");
const taskList = [];

const renderList = () => {
  ul.textContent = "";
  taskList.forEach((element, index) => {
    element.dataset.id = index;
    ul.appendChild(element);
  });
};

const searchTask = (e) => {
  e.preventDefault();
  searchFormInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 8) {
      taskList.forEach((task) => {
        ul.appendChild(task);
      });
    }
  });
  const inputText = e.target.value.toLowerCase();
  // const tasks = [...liItems];
  const newTasks = taskList.filter((index) => index.textContent.toLowerCase().includes(inputText));
  ul.textContent = "";
  // console.log(tasks);
  newTasks.forEach((index) => ul.appendChild(index));
  taskCount.textContent = taskList.length;
};

const removeTask = (e) => {
  const dataKey = e.target.parentNode.dataset.key;
  taskList.splice(dataKey, 1);
  taskCount.textContent = taskList.length;
  renderList();
};

const addTask = (e) => {
  e.preventDefault();
  const newTask = addFormInput.value;
  if (newTask === "") return;
  const li = document.createElement("li");
  li.innerHTML = newTask + "<button>delete</button>";
  li.className = "task";
  taskList.push(li);
  renderList();
  ul.appendChild(li);
  addFormInput.value = "";
  searchFormInput.value = "";
  taskCount.textContent = document.querySelectorAll("li.task").length;
  li.querySelector("button").addEventListener("click", removeTask);
};

submitBtn.addEventListener("click", addTask);
searchFormInput.addEventListener("input", searchTask);
