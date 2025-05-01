window.onload = () => {
    setTimeout(() => {
        let loader = document.getElementById("loading");
        loader.style.display = "none";
  },1500)
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("Service Worker registered", reg))
      .catch((err) => console.error("Service Worker registration failed", err));
  });
}
