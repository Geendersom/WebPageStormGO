/**
 * Main JavaScript - Inicializa a aplicação
 */

// Aguarda o DOM estar pronto
document.addEventListener('DOMContentLoaded', async () => {
    // Carrega todos os componentes
    await componentLoader.loadComponents([
        { containerId: 'header-container', filePath: 'components/header.html' },
        { containerId: 'hero-container', filePath: 'sections/hero.html' },
        { containerId: 'features-container', filePath: 'sections/features.html' },
        { containerId: 'pricing-container', filePath: 'sections/pricing.html' },
        { containerId: 'testimonials-container', filePath: 'sections/testimonials.html' },
        { containerId: 'cta-container', filePath: 'sections/cta.html' },
        { containerId: 'footer-container', filePath: 'components/footer.html' }
    ]);

    // Inicializa scroll suave
    initSmoothScroll();
    
    // Inicializa scroll header
    initHeaderScroll();
    
    // Inicializa animações on scroll
    initScrollAnimations();
});

/**
 * Inicializa scroll suave para links âncora
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Adiciona efeito de scroll no header
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

/**
 * Inicializa animações ao fazer scroll
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa elementos que devem ser animados
    document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

