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
// document.querySelectorAll("a").forEach((li) => {
//   li.addEventListener("mouseenter", (e) => {
//     let iframe = document.querySelector('iframe');
//     iframe.src = e.currentTarget.href;

//   });

//   li.addEventListener("mouseleave", () => {
//     const iframe = li.querySelector("iframe");
//     if (iframe) iframe.remove();
//   });
// });
