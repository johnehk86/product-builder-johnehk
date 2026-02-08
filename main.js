const dinnerMenus = [
    {
        name: '김치찌개',
        nameEn: 'Kimchi Jjigae',
        emoji: '🍲',
        desc: '매콤하고 깊은 맛의 한국 대표 찌개',
        imagePrompt: 'delicious Korean kimchi jjigae stew with tofu and pork, food photography, top view, appetizing',
        color: '#e74c3c',
        seed: 101
    },
    {
        name: '비빔밥',
        nameEn: 'Bibimbap',
        emoji: '🍚',
        desc: '다양한 나물과 고추장이 어우러진 한 그릇',
        imagePrompt: 'Korean bibimbap rice bowl with colorful vegetables egg and gochujang, food photography, top view',
        color: '#f39c12',
        seed: 202
    },
    {
        name: '삼겹살',
        nameEn: 'Samgyeopsal',
        emoji: '🥩',
        desc: '노릇하게 구운 삼겹살과 쌈채소의 조화',
        imagePrompt: 'Korean grilled samgyeopsal pork belly on grill with lettuce wraps and side dishes, food photography',
        color: '#e67e22',
        seed: 303
    },
    {
        name: '불고기',
        nameEn: 'Bulgogi',
        emoji: '🥘',
        desc: '달콤한 간장 양념에 재운 소고기 구이',
        imagePrompt: 'Korean bulgogi marinated beef with onions on plate, food photography, appetizing',
        color: '#d35400',
        seed: 404
    },
    {
        name: '잡채',
        nameEn: 'Japchae',
        emoji: '🍜',
        desc: '쫄깃한 당면과 다채로운 채소의 어울림',
        imagePrompt: 'Korean japchae glass noodles with colorful vegetables and beef, food photography',
        color: '#8e44ad',
        seed: 505
    },
    {
        name: '떡볶이',
        nameEn: 'Tteokbokki',
        emoji: '🌶️',
        desc: '매콤달콤한 고추장 소스의 국민 간식',
        imagePrompt: 'Korean tteokbokki spicy rice cakes in red gochujang sauce with fish cakes, food photography',
        color: '#c0392b',
        seed: 606
    },
    {
        name: '순두부찌개',
        nameEn: 'Sundubu Jjigae',
        emoji: '🫕',
        desc: '부드러운 순두부와 뜨끈한 국물의 조화',
        imagePrompt: 'Korean sundubu jjigae soft tofu stew bubbling in stone pot, food photography',
        color: '#e74c3c',
        seed: 707
    },
    {
        name: '갈비',
        nameEn: 'Galbi',
        emoji: '🍖',
        desc: '양념에 재운 갈비를 숯불에 구운 별미',
        imagePrompt: 'Korean galbi grilled short ribs with marinade on plate, food photography, appetizing',
        color: '#b7950b',
        seed: 808
    },
    {
        name: '자장면',
        nameEn: 'Jajangmyeon',
        emoji: '🍝',
        desc: '춘장 소스가 면에 감기는 중화풍 요리',
        imagePrompt: 'Korean jajangmyeon black bean sauce noodles with cucumber garnish, food photography',
        color: '#2c3e50',
        seed: 909
    },
    {
        name: '해물파전',
        nameEn: 'Haemul Pajeon',
        emoji: '🥞',
        desc: '바삭한 식감의 해물 가득 파전',
        imagePrompt: 'Korean haemul pajeon seafood green onion pancake crispy, food photography',
        color: '#27ae60',
        seed: 1010
    },
    {
        name: '피자',
        nameEn: 'Pizza',
        emoji: '🍕',
        desc: '모짜렐라 치즈가 쭉 늘어나는 피자',
        imagePrompt: 'delicious cheese pizza with melted mozzarella and fresh basil, food photography',
        color: '#e74c3c',
        seed: 1111
    },
    {
        name: '파스타',
        nameEn: 'Pasta',
        emoji: '🍝',
        desc: '알덴테로 삶은 면과 풍미 가득한 소스',
        imagePrompt: 'Italian pasta with tomato sauce and fresh basil on white plate, food photography',
        color: '#f1c40f',
        seed: 1212
    },
    {
        name: '스테이크',
        nameEn: 'Steak',
        emoji: '🥩',
        desc: '완벽하게 구워낸 육즙 가득한 스테이크',
        imagePrompt: 'perfectly cooked medium rare steak with rosemary and butter on plate, food photography',
        color: '#8b4513',
        seed: 1313
    },
    {
        name: '스시',
        nameEn: 'Sushi',
        emoji: '🍣',
        desc: '신선한 생선과 밥의 절묘한 조합',
        imagePrompt: 'fresh Japanese sushi assortment with salmon tuna on wooden board, food photography',
        color: '#1abc9c',
        seed: 1414
    },
    {
        name: '라멘',
        nameEn: 'Ramen',
        emoji: '🍜',
        desc: '진한 국물과 쫄깃한 면의 일본식 라멘',
        imagePrompt: 'Japanese tonkotsu ramen with egg and chashu pork in rich broth, food photography',
        color: '#f39c12',
        seed: 1515
    }
];

function getImageUrl(menu) {
    const prompt = encodeURIComponent(menu.imagePrompt);
    return `https://image.pollinations.ai/prompt/${prompt}?width=600&height=400&seed=${menu.seed}&nologo=true`;
}

// Theme toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('.theme-icon');
const body = document.body;

function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        themeIcon.textContent = '🌙';
    }
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    setTheme(body.classList.contains('dark-mode') ? 'light' : 'dark');
}

themeToggleBtn.addEventListener('click', toggleTheme);

// Menu recommendation
const generatorBtn = document.getElementById('generator-btn');
const retryBtn = document.getElementById('retry-btn');
const menuDisplay = document.getElementById('menu-display');
let lastIndex = -1;

function recommendMenu() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    } while (randomIndex === lastIndex && dinnerMenus.length > 1);
    lastIndex = randomIndex;

    const menu = dinnerMenus[randomIndex];
    const imageUrl = getImageUrl(menu);

    menuDisplay.innerHTML = `
        <div class="food-card" style="--card-color: ${menu.color}">
            <div class="food-image-wrapper">
                <div class="food-image-placeholder">
                    <span class="placeholder-emoji">${menu.emoji}</span>
                    <span class="loading-text">사진 불러오는 중...</span>
                </div>
                <img
                    class="food-image"
                    src="${imageUrl}"
                    alt="${menu.name} 사진"
                    loading="eager"
                    onload="this.classList.add('loaded'); this.previousElementSibling.classList.add('hidden');"
                    onerror="this.style.display='none'; this.previousElementSibling.querySelector('.loading-text').textContent='${menu.emoji}';"
                >
            </div>
            <div class="food-info">
                <div class="food-emoji">${menu.emoji}</div>
                <h2 class="food-name">${menu.name}</h2>
                <p class="food-name-en">${menu.nameEn}</p>
                <p class="food-desc">${menu.desc}</p>
            </div>
        </div>
    `;

    menuDisplay.style.display = 'block';
    retryBtn.style.display = 'inline-flex';

    const card = menuDisplay.querySelector('.food-card');
    card.classList.add('animate-in');
}

generatorBtn.addEventListener('click', recommendMenu);
retryBtn.addEventListener('click', recommendMenu);

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
});
