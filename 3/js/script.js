let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove("active");
        if (i === index) {
            testimonial.classList.add("active");
        }
    });
}

function showNextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function showPrevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Mostrar o primeiro depoimento ao carregar a página
showTestimonial(currentTestimonial);
