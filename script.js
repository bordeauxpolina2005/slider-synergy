const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const currentSlide = document.getElementById('currentSlide');

let index = 0;

function updateSlide() {
    slides.style.transform = translateX(${-index * 100}%);
    currentSlide.textContent = Изображение ${index + 1} из ${images.length};
}

nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateSlide();
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateSlide();
});

// Инициализация
updateSlide();
