/**
 * Testimonials Section JavaScript
 */

// Aguarda o componente testimonials ser carregado
document.addEventListener('DOMContentLoaded', () => {
    const testimonialsContainer = document.getElementById('testimonials-container');
    
    if (testimonialsContainer) {
        testimonialsContainer.addEventListener('componentLoaded', initTestimonials);
    }
    
    // Se o componente já estiver carregado
    if (testimonialsContainer && testimonialsContainer.innerHTML.trim() !== '') {
        initTestimonials();
    }
});

function initTestimonials() {
    initTestimonialCards();
}

/**
 * Inicializa cards de depoimentos
 */
function initTestimonialCards() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        // Adiciona animação escalonada
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Adiciona efeito de hover
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

