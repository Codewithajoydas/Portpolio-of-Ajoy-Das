const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileElem");
const fileSelect = document.getElementById("fileSelect");
const fileList = document.getElementById("fileList");

// Prevent default behavior
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(
    eventName,
    (e) => {
      e.preventDefault();
      e.stopPropagation();
    },
    false
  );
});

// Highlight on drag
["dragenter", "dragover"].forEach((eventName) => {
  dropArea.addEventListener(
    eventName,
    () => dropArea.classList.add("highlight"),
    false
  );
});
["dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(
    eventName,
    () => dropArea.classList.remove("highlight"),
    false
  );
});

// Handle drop
dropArea.addEventListener("drop", handleDrop, false);

function handleDrop(e) {
  const files = e.dataTransfer.files;
  showFileNames(files);
}

// Optional: Select files via button
fileSelect.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", () => {
  showFileNames(fileInput.files);
});

// ✅ Function to show file names
function showFileNames(files) {
//   fileList.innerHTML = ""; // Clear previous
  [...files].forEach((file) => {
    const p = document.createElement("p");
    p.textContent = `📄 ${file.name}`;
    fileList.appendChild(p);
  });
}
