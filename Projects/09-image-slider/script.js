let img = document.getElementById("img");
let images = ['./images/image1.jpg', './images/image2.jpg', './images/image3.jpg'];
let nxt = document.getElementById("nxt");
let pre  = document.getElementById("pre");
let i = 0;
function next() { 
    i++;
    if (i >= images.length) {
        i = 0;
    }
    img.src = images[i];
}
function prev() { 
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    img.src = images[i];
}

nxt.addEventListener("click", next);
pre.addEventListener("click", prev);