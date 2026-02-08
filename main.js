
const dinnerMenus = [
    "Kimchi Jjigae",
    "Bibimbap",
    "Samgyeopsal",
    "Bulgogi",
    "Japchae",
    "Tteokbokki",
    "Sundubu Jjigae",
    "Galbi",
    "Jajangmyeon",
    "Haemul Pajeon",
    "Pizza",
    "Pasta",
    "Steak",
    "Sushi",
    "Ramen"
];

const generatorBtn = document.getElementById('generator-btn');
const menuDisplay = document.getElementById('menu-display');
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

generatorBtn.addEventListener('click', () => {
    // Show a loading message
    menuDisplay.innerHTML = '<p>Finding a delicious menu...</p>';

    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];

    // Fetch a random image from Unsplash based on the menu
    const imageUrl = `https://source.unsplash.com/400x300/?${selectedMenu}`;

    menuDisplay.innerHTML = ''; // Clear display

    const foodImage = document.createElement('img');
    foodImage.src = imageUrl;
    foodImage.alt = `A picture of ${selectedMenu}`;
    foodImage.style.maxWidth = '100%';
    foodImage.style.height = 'auto';
    foodImage.style.borderRadius = '8px';

    const foodName = document.createElement('p');
    foodName.textContent = selectedMenu;
    foodName.style.marginTop = '10px';
    foodName.style.fontWeight = 'bold';

    menuDisplay.appendChild(foodImage);
    menuDisplay.appendChild(foodName);
});


