
class LottoNumbers extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const container = document.createElement('div');
        container.setAttribute('class', 'number-container');
        const style = document.createElement('style');
        style.textContent = `
            .number-container {
                display: flex;
                gap: 10px;
            }
            .number {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: var(--number-bg, #f0f0f0); /* Use CSS variable, with fallback */
                color: var(--number-text, #333); /* Use CSS variable, with fallback */
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                font-weight: bold;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                transition: background-color 0.3s ease, color 0.3s ease;
            }
        `;
        shadow.appendChild(style);
        shadow.appendChild(container);
    }

    generateNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        const container = this.shadowRoot.querySelector('.number-container');
        container.innerHTML = ''; // Clear previous numbers

        for (const number of sortedNumbers) {
            const numberDiv = document.createElement('div');
            numberDiv.setAttribute('class', 'number');
            numberDiv.textContent = number;
            const color = this.getNumberColor(number);
            numberDiv.style.backgroundColor = color;
            // The text color will now be handled by the CSS variable in the shadow DOM,
            // so we don't explicitly set it here unless it's a specific number color override.
            // For now, let's assume the number color is the background.
            // We should ensure the number text is readable against these colors.
            // For lotto balls, the number's background color is often distinct, and the text is white.
            // Let's keep `numberDiv.style.color = 'white';` for the colored balls.
            numberDiv.style.color = 'white';
            container.appendChild(numberDiv);
        }
    }

    getNumberColor(number) {
        if (number <= 10) return '#f44336'; // Red
        if (number <= 20) return '#ff9800'; // Orange
        if (number <= 30) return '#ffc107'; // Amber
        if (number <= 40) return '#4caf50'; // Green
        return '#2196f3'; // Blue
    }
}

customElements.define('lotto-numbers', LottoNumbers);

const generatorBtn = document.getElementById('generator-btn');
const lottoNumbers = document.querySelector('lotto-numbers');
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
    lottoNumbers.generateNumbers();
});

