// Dark mode toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleBtn.innerHTML = body.classList.contains('dark')
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});
