// Rotating hero text
const phrases = ["modern websites", "responsive UIs", "smooth experiences"];
let i = 0;
const el = document.getElementById("changing-text");

function changeText() {
  el.style.opacity = 0;
  setTimeout(() => {
    el.textContent = phrases[i];
    el.style.opacity = 1;
    i = (i + 1) % phrases.length;
  }, 300);
}
setInterval(changeText, 2500);
changeText();

// Header background change on scroll
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
