const addFormInput = document.querySelector(".add-form input");
const submitBtn = document.querySelector(".submitBtn");
const ul = document.querySelector("ul");
const taskCount = document.querySelector("h2 span");
const liItems = document.querySelectorAll("li");

const addTask = (e) => {
  e.preventDefault();
  const newTask = addFormInput.value;
  const li = document.createElement("li");
  li.innerHTML = newTask + "<button>delete</button>";
  ul.appendChild(li);
  taskCount.textContent = liItems.length;
};

submitBtn.addEventListener("click", addTask);
