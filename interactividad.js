// Carrousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.right-button');
const prevButton = document.querySelector('.left-button');
const slideWidth = slides[0].getBoundingClientRect().width;

// Colocar los slides uno junto a otro
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

function moveToSlide(track, currentSlide, targetSlide) {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// Evento para botón "Siguiente"
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;

    // Si no hay más slides, volver al primero
    if (!nextSlide) {
        nextSlide = slides[0];
    }

    moveToSlide(track, currentSlide, nextSlide);
});

// Evento para botón "Anterior"
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;

    // Si no hay más slides, volver al último
    if (!prevSlide) {
        prevSlide = slides[slides.length - 1];
    }

    moveToSlide(track, currentSlide, prevSlide);
});
