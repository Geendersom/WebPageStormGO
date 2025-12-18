/**
 * Features Section JavaScript
 */

// Aguarda o componente features ser carregado
document.addEventListener('DOMContentLoaded', () => {
    const featuresContainer = document.getElementById('features-container');
    
    if (featuresContainer) {
        featuresContainer.addEventListener('componentLoaded', initFeatures);
    }
    
    // Se o componente já estiver carregado
    if (featuresContainer && featuresContainer.innerHTML.trim() !== '') {
        initFeatures();
    }
});

function initFeatures() {
    initFeatureCards();
}

/**
 * Inicializa interações dos cards de features
 */
function initFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        // Adiciona efeito de hover
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
        
        // Adiciona clique para mais informações (opcional)
        card.addEventListener('click', () => {
            const feature = card.getAttribute('data-feature');
            if (feature) {
                console.log(`Feature clicked: ${feature}`);
                // Aqui você pode abrir um modal ou redirecionar
            }
        });
    });
}

