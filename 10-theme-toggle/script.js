let toggleTheme = document.getElementById("toggleTheme");
let body = document.body;
toggleTheme.addEventListener("click", function () { 
    body.classList.toggle("dark");
})