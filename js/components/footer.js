/**
 * Footer Component JavaScript
 */

// Aguarda o componente footer ser carregado
document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('footer-container');
    
    if (footerContainer) {
        footerContainer.addEventListener('componentLoaded', initFooter);
    }
    
    // Se o componente já estiver carregado
    if (footerContainer && footerContainer.innerHTML.trim() !== '') {
        initFooter();
    }
});

function initFooter() {
    initFooterLinks();
    initSocialLinks();
}

/**
 * Inicializa links do footer com scroll suave
 */
function initFooterLinks() {
    const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            
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
 * Inicializa links sociais (pode adicionar tracking aqui)
 */
function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Aqui você pode adicionar tracking de eventos
            const platform = link.getAttribute('aria-label');
            console.log(`Social link clicked: ${platform}`);
            
            // Se os links não tiverem href, prevenir comportamento padrão
            if (!link.getAttribute('href') || link.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });
}

