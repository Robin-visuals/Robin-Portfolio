// =======================
// 3D Carousel Script
// =======================

const carousel = document.querySelector('.carousel');
const slides = Array.from(carousel.children);
const carouselContainer = document.querySelector('.carousel-container');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;
let autoSlideInterval = null;

// Create dots dynamically
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if(index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
});

const dots = Array.from(dotsContainer.children);

// Update carousel classes
function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.remove('prev', 'next', 'active');

        if(index === currentIndex) slide.classList.add('active');
        else if(index === (currentIndex - 1 + slides.length) % slides.length) slide.classList.add('prev');
        else if(index === (currentIndex + 1) % slides.length) slide.classList.add('next');
    });

    dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
}

// Go to next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

// Go to previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

// Go to specific slide
function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Carousel arrow navigation
document.querySelector('.carousel-nav.left').addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});
document.querySelector('.carousel-nav.right').addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

// Auto slide
function startAutoSlide() {
    if(autoSlideInterval) clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Pause on hover
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

carouselContainer.addEventListener('mouseleave', () => {
    startAutoSlide();
});

// Initialize
updateCarousel();
startAutoSlide();

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // show/hide menu
    hamburger.classList.toggle('open');  // animate hamburger to cross
});
