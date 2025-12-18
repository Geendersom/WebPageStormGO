/**
 * Header Component JavaScript
 */

// Aguarda o componente header ser carregado
document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('header-container');
    
    if (headerContainer) {
        headerContainer.addEventListener('componentLoaded', initHeader);
    }
    
    // Se o componente já estiver carregado
    if (headerContainer && headerContainer.innerHTML.trim() !== '') {
        initHeader();
    }
});

function initHeader() {
    initMobileMenu();
    initHeaderButtons();
}

/**
 * Inicializa menu mobile
 */
function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('navbar-menu');
    
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    // Fecha menu ao clicar em um link
    const navLinks = menu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.classList.remove('active');
        });
    });

    // Fecha menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
            menu.classList.remove('active');
            toggle.classList.remove('active');
        }
    });
}

/**
 * Inicializa botões do header
 */
function initHeaderButtons() {
    const installBtn = document.getElementById('header-cta-btn');
    
    if (installBtn) {
        installBtn.addEventListener('click', () => {
            handleInstallClick();
        });
    }
}

/**
 * Manipula clique no botão de instalação
 */
function handleInstallClick() {
    // Aqui você pode redirecionar para a Chrome Web Store
    // window.open('https://chrome.google.com/webstore/...', '_blank');
    
    // Por enquanto, apenas scroll para a seção de CTA
    const ctaSection = document.getElementById('contato');
    if (ctaSection) {
        const headerOffset = 80;
        const elementPosition = ctaSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

