new Typed("#text", {
  strings: ["Website", "Application"],
  typeSpeed: 100,
  backSpeed: 100,
  fadeOut: true,
  loop: true,
});

let image = document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    e.preventDefault();
    let popup = document.getElementById("popup");
    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");

    noBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
    yesBtn.addEventListener("click", () => {
      popup.style.display = "none";
      let a = document.createElement("a");
      a.href = e.target.src;
      a.download = e.target.alt;
      document.body.appendChild(a);
      a.click();
      alert("Image saved successfully!");
    });
    popup.style.display = "flex";
  });
});
