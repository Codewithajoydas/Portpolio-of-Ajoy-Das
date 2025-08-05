let routes = {
  "#/": "./pages/home.html",
  "#/about": "./pages/about.html",
};

async function renderPage() {
  const path = window.location.hash || "#/";
  const page = routes[path];

  if (page) {
    const res = await fetch(page);

    const html = await res.text();
    document.getElementById("content").innerHTML = html;
  } else {
    document.getElementById("content").innerHTML =
      "<h1>404 - Page Not Found</h1>";
  }
}

window.addEventListener("hashchange", renderPage);
window.addEventListener("load", renderPage);
