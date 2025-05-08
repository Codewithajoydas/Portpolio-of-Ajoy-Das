
    const routes = {
      "/": "./Pages/home.html",
      "/landing": "./Pages/home.html",
      "/about": "./Pages/about.html",
      "/contact": "./Pages/contact.html",
      "/education": "./Pages/education.html",
      "/skills": "./Pages/skills.html",
    };

    function navigateToPage(path) {
      const route = routes[path];
      if (!route) {
        document.getElementById("app").innerHTML = "<h2>404 - Page Not Found</h2>";
        return;
      }

      fetch(route)
        .then(res => res.text())
        .then(html => {
          const app = document.getElementById("app");
          app.innerHTML = html;

          // Re-execute scripts from loaded HTML
          const scripts = app.querySelectorAll("script");
          scripts.forEach(oldScript => {
            const newScript = document.createElement("script");
            if (oldScript.src) {
              newScript.src = oldScript.src;
            } else {
              newScript.textContent = oldScript.textContent;
            }
            document.body.appendChild(newScript);
            document.body.removeChild(newScript);
          });

          // Apply fade-in animation
          app.classList.remove("fade-in");
          void app.offsetWidth; // Force reflow
          app.classList.add("fade-in");
        })
        .catch(err => console.error("Failed to load page:", err));
    }

    // Handle navigation
    function handleRouteChange() {
      const path = window.location.hash.slice(1) || "/";
      navigateToPage(path);
    }

    // Support for dynamic links (delegation)
    document.addEventListener("click", e => {
      if (e.target.matches("a[data-link]")) {
        e.preventDefault();
        const href = e.target.getAttribute("href");
        window.location.hash = href;
      }
    });

    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("load", handleRouteChange);
  