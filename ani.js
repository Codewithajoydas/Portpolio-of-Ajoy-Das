let popup = document.getElementById("popup");
let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let currentImg = null;
// Add event listeners ONCE
noBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

yesBtn.addEventListener("click", () => {
  popup.style.display = "none";
  if (currentImg) {
    let a = document.createElement("a");
    a.href = currentImg.src;
    a.download = currentImg.alt || "image";
    document.body.appendChild(a);
    a.click();
    a.remove(); // Clean up
  }
});

