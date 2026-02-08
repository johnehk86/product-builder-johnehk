
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
}

// Function to toggle the theme
function toggleTheme() {
    if (body.classList.contains('dark-mode')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

// Event listener for theme toggle button
themeToggleBtn.addEventListener('click', toggleTheme);

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light
    setTheme(savedTheme);
});


