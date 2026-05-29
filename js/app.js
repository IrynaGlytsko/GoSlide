// Nav fixed

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');

    if (!header || !hero) {
        return;
}

    const heroHeight = hero.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= heroHeight) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});

// Burger button toggle

const burgerBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
if (burgerBtn && nav) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

// Slider reviews

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.reviews-item');
    const prevBtn = document.querySelector('.slider-arrows-prev');
    const nextBtn = document.querySelector('.slider-arrows-next');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});
