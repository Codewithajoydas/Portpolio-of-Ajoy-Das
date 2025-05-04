let cursor = document.getElementById("cursor");
let body = document.querySelector("body");

window.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});
