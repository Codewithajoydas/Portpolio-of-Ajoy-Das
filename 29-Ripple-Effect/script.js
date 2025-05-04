document.getElementById("rippleBtn").addEventListener("click", function (e) {
  const button = e.currentTarget;

  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  ripple.style.width = ripple.style.height = "100px";

  button.appendChild(ripple);

      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
});
