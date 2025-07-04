let list = [];

let inp = document.getElementById("inp");
let todoList = document.getElementById("list");
let btn = document.getElementById("btn");
let count = document.getElementById("count");

function renderList() {
  todoList.innerHTML = "";

  if (list.length === 0) {
    todoList.innerHTML = `<h3 style="text-align:center; color:gray">Add Some task here</h3>`;
    count.innerText = `0 / 0 tasks done`;
    return;
  }

  list.forEach((element) => {
    let li = document.createElement("li");
    let delBtn = document.createElement("span");
    let item = document.createElement("div");

    item.className = "item";
    if (element.complete) item.classList.add("completed");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `inp${element.id}`;
    checkbox.checked = element.complete;

    let label = document.createElement("label");
    label.className = "custom-label";
    label.htmlFor = checkbox.id;
    label.textContent = element.task;

    checkbox.onchange = () => {
      element.complete = checkbox.checked;
      saveToLocalStorage();
      renderList(); // re-renders and updates count
    };

    delBtn.innerHTML = `🗑️`;
    delBtn.className = "deletebtn";
    delBtn.onclick = () => {
      list = list.filter((item) => item.id !== element.id);
      saveToLocalStorage();
      renderList(); // re-renders and updates count
    };

    item.appendChild(checkbox);
    item.appendChild(label);
    li.appendChild(item);
    li.appendChild(delBtn);
    todoList.appendChild(li);
  });

  updateCount();
}

btn.addEventListener("click", () => {
  let data = inp.value.trim();
  if (data === "") return;

  let task = {
    id: Date.now(),
    task: data,
    complete: false,
  };
  list.push(task);
  saveToLocalStorage();
  renderList(); // already updates count
  inp.value = "";
});

function updateCount() {
  let completed = list.filter((el) => el.complete).length;
  let total = list.length;
  count.innerText = `${completed} / ${total} tasks done`;
}

function saveToLocalStorage() {
  localStorage.setItem("todoList", JSON.stringify(list));
}

function loadFromLocalStorage() {
  const data = localStorage.getItem("todoList");
  if (data) {
    list = JSON.parse(data);
  }
}

// Initial load
loadFromLocalStorage();
renderList();
