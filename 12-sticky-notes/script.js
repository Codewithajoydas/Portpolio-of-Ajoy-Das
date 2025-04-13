    let stickyNotes = document.getElementById("stickyNotes");
    let save = document.getElementById("save");
    let add = document.getElementById("add");
    let notes = [];

    // 🔁 Load notes from localStorage on page load
    window.onload = function () {
      let savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
      savedNotes.forEach((text) => {
        createNote(text);
      });
    };

    // ➕ Add new note
    add.addEventListener("click", function () {
      createNote("");
    });

    // 💾 Save all notes to localStorage
    save.addEventListener("click", function () {
      let noteContent = stickyNotes.querySelectorAll("textarea");
      notes = [];
      noteContent.forEach((note) => {
        notes.push(note.value);
      });
      localStorage.setItem("notes", JSON.stringify(notes));
    });

    // 🧱 Function to create a note with delete option
    function createNote(text = "") {
      let note = document.createElement("div");
      note.className = "note";
      note.innerHTML = `
        <textarea>${text}</textarea>
        <button class="delete">Delete</button>
      `;
        note.querySelector(".delete").addEventListener("click", function () {
        note.remove();
      });
      stickyNotes.appendChild(note);
    }