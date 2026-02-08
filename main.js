
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
                background-color: #f0f0f0;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                font-weight: bold;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
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

generatorBtn.addEventListener('click', () => {
    lottoNumbers.generateNumbers();
});
