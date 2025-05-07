const routes = {
  "/": "./Pages/home.html",
  "/landing": "./Pages/home.html",
  "/about": "./Pages/about.html",
  "/contact": "./Pages/contact.html",
  "/education": "./Pages/education.html",
//   "/experience": "./Pages/experience.html",
  "/skills": "./Pages/skills.html",
};

function navigateToPage(path) {
  const route = routes[path];
  if (!route) return;

  fetch(route)
    .then((res) => res.text())
    .then((html) => {
      const app = document.getElementById("app");

      app.innerHTML = html;

      // Apply fade-in animation
      app.classList.remove("fade-in"); // Reset if already applied
      void app.offsetWidth; // Force reflow to restart animation
      app.classList.add("fade-in");
    })
    .catch((err) => console.error("Failed to load page:", err));
}


window.addEventListener("hashchange", () => {
  const path = window.location.hash.slice(1) || "/";
  navigateToPage(path);
});

window.addEventListener("load", () => {
  const path = window.location.hash.slice(1) || "/";
  navigateToPage(path);
});

document.querySelectorAll("a[data-link]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
      const href = link.getAttribute("href");
      console.log(href);
    window.location.hash = href;
  });
});
