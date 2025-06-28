// Load navbar.html dynamically
document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      const placeholder = document.getElementById("navbar-placeholder");
      if (placeholder) {
        placeholder.innerHTML = data;

        // Wait until the DOM actually reflects the injected navbar
        requestAnimationFrame(() => {
          setTimeout(() => {
            initThemeToggle();
          }, 0);
        });
      }
    });
});

function initThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const icon = toggle.querySelector("i");

  // Apply saved theme on load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    if (icon) icon.classList.replace("bi-moon-fill", "bi-sun-fill");
  }

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (icon) {
      icon.classList.toggle("bi-moon-fill", !isDark);
      icon.classList.toggle("bi-sun-fill", isDark);
    }
  });
}
/* function setLanguage(lang) {
  localStorage.setItem('preferredLanguage', lang);
}

function applyLanguagePreference() {
  const lang = localStorage.getItem('preferredLanguage') || 'EN';
  const dropdown = document.getElementById('language-dropdown');
  if (dropdown) dropdown.value = lang;
}

// Hide language selector on homepage
function conditionallyHideLanguageSelector() {
  const path = window.location.pathname;
  if (path.endsWith('index.html') || path === '/' || path === '/index.html') {
    const selector = document.getElementById('language-selector');
    if (selector) selector.style.display = 'none';
  }
} */

/* document.addEventListener('DOMContentLoaded', function () {
  applyLanguagePreference();
  conditionallyHideLanguageSelector();
}); */

