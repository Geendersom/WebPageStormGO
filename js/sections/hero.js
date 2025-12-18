/**
 * Hero Section JavaScript
 */

// Aguarda o componente hero ser carregado
document.addEventListener('DOMContentLoaded', () => {
    const heroContainer = document.getElementById('hero-container');
    
    if (heroContainer) {
        heroContainer.addEventListener('componentLoaded', initHero);
    }
    
    // Se o componente já estiver carregado
    if (heroContainer && heroContainer.innerHTML.trim() !== '') {
        initHero();
    }
});

function initHero() {
    initHeroButtons();
    initHeroStats();
}

/**
 * Inicializa botões do hero
 */
function initHeroButtons() {
    const installBtn = document.getElementById('hero-install-btn');
    const demoBtn = document.getElementById('hero-demo-btn');
    
    if (installBtn) {
        installBtn.addEventListener('click', () => {
            handleInstallClick();
        });
    }
    
    if (demoBtn) {
        demoBtn.addEventListener('click', () => {
            handleDemoClick();
        });
    }
}

/**
 * Manipula clique no botão de instalação
 */
function handleInstallClick() {
    // Redireciona para Chrome Web Store ou seção de instalação
    // window.open('https://chrome.google.com/webstore/...', '_blank');
    
    // Por enquanto, scroll para CTA
    scrollToSection('contato');
}

/**
 * Manipula clique no botão de demonstração
 */
function handleDemoClick() {
    // Abre modal de demonstração ou vídeo
    // Por enquanto, scroll para features
    scrollToSection('recursos');
}

/**
 * Scroll suave para uma seção
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerOffset = 80;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

/**
 * Inicializa animação dos stats
 */
function initHeroStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        observer.observe(stat);
    });
}

/**
 * Anima número do stat
 */
function animateNumber(element) {
    const text = element.textContent;
    const number = parseInt(text.replace(/\D/g, ''));
    const suffix = text.replace(/\d/g, '');
    
    if (isNaN(number)) return;
    
    let current = 0;
    const increment = number / 50;
    const duration = 1000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            element.textContent = number + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, stepTime);
}

