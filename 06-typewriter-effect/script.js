// let text = document.getElementById("text");
let p = document.getElementById("p");
let str = "Hello, this is a typewriter effect!";
let speed = 150; // Speed in milliseconds
let index = 0;

let typing = setInterval(() => {
  p.innerHTML = str.slice(0, index++);
  if (index > str.length) {
      index = 0; // Reset index to start over
      clearInterval(typing);
  }
  // Optional: Uncomment the next line to stop the effect after one complete cycle
}, speed);
