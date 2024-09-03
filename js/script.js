// scripts.js

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('dark-mode-toggle');
  toggleButton.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
  });
});

// Add more JavaScript functionality if needed
