/**
 * CTA Section JavaScript
 */

// Aguarda o componente CTA ser carregado
document.addEventListener('DOMContentLoaded', () => {
    const ctaContainer = document.getElementById('cta-container');
    
    if (ctaContainer) {
        ctaContainer.addEventListener('componentLoaded', initCTA);
    }
    
    // Se o componente já estiver carregado
    if (ctaContainer && ctaContainer.innerHTML.trim() !== '') {
        initCTA();
    }
});

function initCTA() {
    initCTAButtons();
    initContactForm();
}

/**
 * Inicializa botões do CTA
 */
function initCTAButtons() {
    const installBtn = document.getElementById('cta-install-btn');
    const contactBtn = document.getElementById('cta-contact-btn');
    
    if (installBtn) {
        installBtn.addEventListener('click', () => {
            handleInstallClick();
        });
    }
    
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            // Scroll para o formulário
            const form = document.getElementById('contact-form');
            if (form) {
                form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Foca no primeiro campo
                const nameInput = document.getElementById('name');
                if (nameInput) {
                    setTimeout(() => nameInput.focus(), 500);
                }
            }
        });
    }
}

/**
 * Manipula clique no botão de instalação
 */
function handleInstallClick() {
    // Redireciona para Chrome Web Store
    // window.open('https://chrome.google.com/webstore/...', '_blank');
    
    // Por enquanto, apenas mostra mensagem
    alert('Redirecionando para Chrome Web Store...');
}

/**
 * Inicializa formulário de contato
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            await handleFormSubmit(form);
        });
    }
}

/**
 * Manipula envio do formulário
 */
async function handleFormSubmit(form) {
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Validação básica
    if (!data.name || !data.email || !data.message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Mostra loading
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    try {
        // Envia para API PHP
        const response = await fetch('../php/api/contact.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        } else {
            throw new Error(result.message || 'Erro ao enviar mensagem');
        }
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        alert('Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

