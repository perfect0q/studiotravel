// Получаем элементы
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Проверяем сохраненную тему в localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateButtonText(savedTheme);
}


function updateButtonText(theme) {
    if (theme === 'dark-theme') {
        themeToggle.textContent = '☀️'; 
    } else {
        themeToggle.textContent = '🌙'; 
    }
}


themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
        updateButtonText('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        updateButtonText('dark-theme');
    }
});