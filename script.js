const addForm = document.querySelector(".add-form");
const searchForm = document.querySelector(".search-form");
const input = document.querySelector("input");
const submitBtn = document.querySelector("button.submitBtn");
const ul = document.querySelector("ul");
const listItems = document.querySelectorAll("li");
const h2 = document.querySelector("h2 span");

const removeTask = (e) => {
  e.target.parentNode.remove();
  h2.textContent = listItems.length;
};

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const givenTask = input.value;
  if (givenTask === "") return;
  const task = document.createElement("li");
  task.innerHTML = givenTask + `<button>Delete</button>`;
  ul.appendChild(task);
  input.value = "";
  task.addEventListener("click", removeTask);
  h2.textContent = listItems.length;
});

const searchTask = (e) => {
  const query = e.target.value.toLowerCase();
  let tasks = [...listItems];
  tasks = tasks.filter((li) => li.textContent.toLowerCase().includes(query));
  ul.textContent = "";
  tasks.forEach((li) => ul.appendChild(li));
};

searchForm.addEventListener("input", searchTask);
