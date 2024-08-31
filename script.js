let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}
// Initialize first slide as active
showSlide(currentSlide);

// Function to animate the counter
function animateCounter(element, start, end, duration) {
    let startTime = null;
    const step = (currentTime) => {
        if (!startTime) startTime = currentTime;

        const progress = Math.min((currentTime - startTime) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = end;
        }
    };
    window.requestAnimationFrame(step);
}
// Select all counter elements
document.querySelectorAll('.counter').forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    animateCounter(counter, 0, target, 2000); // Animate over 2 seconds
});

// Event SLider Script
const eventSlider = document.querySelector('.event-slider');
const dots = document.querySelectorAll('.dot');

let eventIndex = 0;
const totalEvents = dots.length;

function updateSlider() {
    eventSlider.style.transform = `translateX(-${eventIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === eventIndex);
    });
}
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        eventIndex = index;
        updateSlider();
    });
});
// Auto sliding
setInterval(() => {
    eventIndex = (eventIndex + 1) % totalEvents;
    updateSlider();
}, 5000);
