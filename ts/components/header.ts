/**
 * Header Component TypeScript
 */

interface HeaderConfig {
    mobileMenuToggle: HTMLElement | null;
    navbarMenu: HTMLElement | null;
    installButton: HTMLElement | null;
}

class HeaderManager {
    private config: HeaderConfig;

    constructor() {
        this.config = {
            mobileMenuToggle: null,
            navbarMenu: null,
            installButton: null
        };
    }

    public init(): void {
        this.config.mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        this.config.navbarMenu = document.getElementById('navbar-menu');
        this.config.installButton = document.getElementById('header-cta-btn');

        this.initMobileMenu();
        this.initInstallButton();
    }

    private initMobileMenu(): void {
        if (!this.config.mobileMenuToggle || !this.config.navbarMenu) return;

        this.config.mobileMenuToggle.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // Fecha menu ao clicar em um link
        const navLinks = this.config.navbarMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
    }

    private toggleMobileMenu(): void {
        if (!this.config.navbarMenu || !this.config.mobileMenuToggle) return;
        
        this.config.navbarMenu.classList.toggle('active');
        this.config.mobileMenuToggle.classList.toggle('active');
    }

    private closeMobileMenu(): void {
        if (!this.config.navbarMenu || !this.config.mobileMenuToggle) return;
        
        this.config.navbarMenu.classList.remove('active');
        this.config.mobileMenuToggle.classList.remove('active');
    }

    private initInstallButton(): void {
        if (!this.config.installButton) return;

        this.config.installButton.addEventListener('click', () => {
            this.handleInstallClick();
        });
    }

    private handleInstallClick(): void {
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
}

// Exporta para uso global
declare global {
    interface Window {
        headerManager: HeaderManager;
    }
}

// Inicializa quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.headerManager = new HeaderManager();
        window.headerManager.init();
    });
} else {
    window.headerManager = new HeaderManager();
    window.headerManager.init();
}

