document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('active');

      toggleBtn.innerHTML = menu.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
  }
});
