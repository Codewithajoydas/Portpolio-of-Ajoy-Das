new Typed("#text", {
  strings: ["Website", "Application"],
  typeSpeed: 100,
  backSpeed: 100,
  fadeOut: true,
  loop: true,
});

// Get DOM elements once
let popup = document.getElementById("popup");
let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let currentImg = null;

// Loop over all images and prevent drag
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    e.preventDefault();
    currentImg = e.target;
    popup.style.display = "flex";
  });
});

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

