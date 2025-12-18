/**
 * Pricing Section JavaScript
 */

// Aguarda o componente pricing ser carregado
document.addEventListener('DOMContentLoaded', () => {
    const pricingContainer = document.getElementById('pricing-container');
    
    if (pricingContainer) {
        pricingContainer.addEventListener('componentLoaded', initPricing);
    }
    
    // Se o componente já estiver carregado
    if (pricingContainer && pricingContainer.innerHTML.trim() !== '') {
        initPricing();
    }
});

function initPricing() {
    initPricingButtons();
}

/**
 * Inicializa botões de pricing
 */
function initPricingButtons() {
    const pricingButtons = document.querySelectorAll('.btn-pricing');
    
    pricingButtons.forEach(button => {
        button.addEventListener('click', () => {
            const plan = button.getAttribute('data-plan');
            handlePlanSelection(plan);
        });
    });
}

/**
 * Manipula seleção de plano
 */
function handlePlanSelection(plan) {
    console.log(`Plano selecionado: ${plan}`);
    
    // Aqui você pode:
    // 1. Redirecionar para página de checkout
    // 2. Abrir modal de confirmação
    // 3. Enviar dados para API
    
    if (plan === 'enterprise') {
        // Para Enterprise, scroll para formulário de contato
        scrollToSection('contato');
    } else {
        // Para outros planos, pode redirecionar para checkout
        // window.location.href = `/checkout?plan=${plan}`;
        
        // Por enquanto, apenas mostra mensagem
        alert(`Você selecionou o plano ${plan}. Em produção, isso redirecionaria para a página de checkout.`);
    }
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

