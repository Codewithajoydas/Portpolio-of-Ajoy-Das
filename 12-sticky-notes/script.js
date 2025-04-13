let stickyNotes = document.getElementById("stickyNotes");
let save = document.getElementById("save");
let add = document.getElementById("add");
let notes = [];

// Drag start
let darg = (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
};

// Drag over
stickyNotes.addEventListener("dragover", (e) => {
  e.preventDefault();
});

// Drop logic (basic append)
stickyNotes.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const draggedNote = document.getElementById(id);

  // Optional: insert before the note under cursor
  const afterElement = getDragAfterElement(stickyNotes, e.clientY);
  if (afterElement == null) {
    stickyNotes.appendChild(draggedNote);
  } else {
    stickyNotes.insertBefore(draggedNote, afterElement);
  }
  saveNotes();
});

// Load notes on window load
window.onload = function () {
  let savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
  savedNotes.forEach((text) => {
    createNote(text);
  });
};

// Add note
add.addEventListener("click", function () {
  createNote("");
});

// Save notes
save.addEventListener("click", saveNotes);

// Create a note
function createNote(text = "") {
  let note = document.createElement("div");
  note.className = "note";
  note.draggable = true;
  note.id = "note-" + Date.now();
  note.innerHTML = `
    <textarea>${text}</textarea>
    <button class="delete">Delete</button>
  `;

  note.addEventListener("dragstart", darg);

  note.querySelector(".delete").addEventListener("click", function () {
    note.remove();
    saveNotes();
  });

  stickyNotes.appendChild(note);
}

// Save all notes to localStorage
function saveNotes() {
  let noteContent = stickyNotes.querySelectorAll("textarea");
  notes = [];
  noteContent.forEach((note) => {
    notes.push(note.value);
  });
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Helper: get the element below drag to insert before
function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".note:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
