const phrases = ["modern websites", "responsive UIs", "smooth experiences"];
let i = 0;
const el = document.getElementById("changing-text");

function changeText() {
  el.textContent = phrases[i];
  i = (i + 1) % phrases.length;
}
setInterval(changeText, 2000);
changeText();
