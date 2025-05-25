const tasks = document.querySelectorAll(".task");
const columns = document.querySelectorAll(".column");

tasks.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });
});

columns.forEach((column) => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault(); // allow drop
    const dragging = document.querySelector(".dragging");
    column.appendChild(dragging);
  });

  column.addEventListener("dragenter", () => {
    column.classList.add("over");
  });

  column.addEventListener("dragleave", () => {
    column.classList.remove("over");
  });

  column.addEventListener("drop", () => {
    column.classList.remove("over");
  });
});
