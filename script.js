const addFormInput = document.querySelector(".add-form input");
const submitBtn = document.querySelector(".submitBtn");
const ul = document.querySelector("ul");
const taskCount = document.querySelector("h2 span");
const liItems = document.getElementsByClassName("task");

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
  ul.appendChild(li);
  addFormInput.value = "";
  taskCount.textContent = liItems.length;
  li.querySelector("button").addEventListener("click", removeTask);
};

submitBtn.addEventListener("click", addTask);
