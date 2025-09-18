// Rotating hero text
// This array holds the phrases that will be shown one after another.
const phrases = [
  1 "modern websites",
  2 "responsive UIs",
  3 "smooth experiences"
];
// 'i' keeps track of which phrase is currently being shown.
let i = 0;
// Get the element with id "changing-text" from the HTML.
const el = document.getElementById("changing-text");

// This function changes the text in the hero section.
function changeText() {
  // Fade out the text by setting opacity to 0 with a transition.
  el.style.transition = "opacity 0.5s";
  el.style.opacity = 0;
  // After 300 milliseconds, change the text and fade it back in.
  setTimeout(() => {
    el.textContent = phrases[i]; // Set the new phrase.
    el.style.transition = "opacity 0.5s"; // Ensure transition is set for fade in.
    el.style.opacity = 1;        // Fade the text back in.
    i = (i + 1) % phrases.length; // Move to the next phrase, looping back to start.
  }, 300);
  el.style.transition = "opacity 0.5s";
  el.style.opacity = 0;
  // After 300 milliseconds, change the text and fade it back in.
  setTimeout(() => {
    el.textContent = phrases[i]; // Set the new phrase.
    el.style.opacity = 1;        // Fade the text back in.
    i = (i + 1) % phrases.length; // Move to the next phrase, looping back to start.
  }, 300);
}
// Call changeText every 2.5 seconds to rotate the phrases.
setInterval(changeText, 2500);
// Call it once immediately so the first phrase appears right away.
changeText();

// Header background change on scroll
// Get the header element with class "header".
const header = document.querySelector(".header");
// Listen for the user scrolling the page.
window.addEventListener("scroll", () => {
  // If the page is scrolled down more than 50 pixels,
  // add the "scrolled" class to the header (for styling).
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    // Otherwise, remove the "scrolled" class.
    header.classList.remove("scrolled");
  }
});
