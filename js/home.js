import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);
let divs = document.querySelector(".divs .div1");
gsap.from(divs, {
  opacity: 0.01,
  scrollTrigger: {
    trigger: ".divs",
    start: "top 100%",
    end: "+=400",
    scrub: true,
  },
});
gsap.from(".about-section .name span", {
  opacity: 0,
  stagger: 0.05,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-section .name",
    start: "top 90%",
    // end: "+=200", // animate over 200px of scroll
    scrub: true, // play once, not tied to scroll speed
  },
});

const lenis = new Lenis({
  autoRaf: true,
});

let header = document.querySelector("header");
let lastscrollposition = 0;

window.addEventListener("scroll", (e) => {
  let current = document.documentElement.scrollTop;
  if (current > lastscrollposition) {
    header.classList.add("active");
    header.classList.remove("deactive");
  } else {
    header.classList.add("deactive");
    header.classList.remove("active");
  }
  lastscrollposition = current;
});

const greetings = [
  "नमस्ते",
  "Hello",
  "你好",
  "Hallo",
  "こんにちは",
  "Hello",
  "Bonjour",
  "Ciao",
  "Bonjour",
  "Olá",
  "Здравствуйте",
  "안녕하세요",
  "Merhaba",
  "নমস্কার",
];

let loader = document.querySelector(".loader");

let i = 0;
let a;
let span = document.createElement("span");
let time = setInterval(() => {
  a = greetings[i];
  span.textContent = a;
  loader.appendChild(span);
  a = null;
  i++;
  if (i >= greetings.length) {
    i = 0;
    clearInterval(time);
    window.onload = span.style.opacity = "0";
    window.onload = loader.style.height = "0px";
  }
}, 200);

loader.childNodes.forEach((e) => {
  e.removeChild(e);
});


