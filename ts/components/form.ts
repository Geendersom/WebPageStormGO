/**
 * Form Component TypeScript
 */

import { ContactFormData, ApiResponse } from '../utils/types';

class ContactFormManager {
    private form: HTMLFormElement | null;
    private submitButton: HTMLButtonElement | null;

    constructor(formId: string) {
        this.form = document.getElementById(formId) as HTMLFormElement;
        this.submitButton = this.form?.querySelector('button[type="submit"]') as HTMLButtonElement;
    }

    public init(): void {
        if (!this.form) return;

        this.form.addEventListener('submit', async (e: Event) => {
            e.preventDefault();
            await this.handleSubmit();
        });
    }

    private async handleSubmit(): Promise<void> {
        if (!this.form) return;

        const formData = new FormData(this.form);
        const data: ContactFormData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string
        };

        if (!this.validateForm(data)) {
            return;
        }

        this.setLoading(true);

        try {
            const response = await fetch('../php/api/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result: ApiResponse = await response.json();

            if (result.success) {
                this.showSuccess('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.form.reset();
            } else {
                throw new Error(result.message || 'Erro ao enviar mensagem');
            }
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            this.showError('Erro ao enviar mensagem. Por favor, tente novamente.');
        } finally {
            this.setLoading(false);
        }
    }

    private validateForm(data: ContactFormData): boolean {
        if (!data.name || !data.email || !data.message) {
            this.showError('Por favor, preencha todos os campos.');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            this.showError('Por favor, insira um email válido.');
            return false;
        }

        return true;
    }

    private setLoading(loading: boolean): void {
        if (!this.submitButton) return;

        if (loading) {
            this.submitButton.textContent = 'Enviando...';
            this.submitButton.disabled = true;
        } else {
            this.submitButton.textContent = 'Enviar Mensagem';
            this.submitButton.disabled = false;
        }
    }

    private showSuccess(message: string): void {
        alert(message); // Pode ser substituído por um toast/notificação melhor
    }

    private showError(message: string): void {
        alert(message); // Pode ser substituído por um toast/notificação melhor
    }
}

// Exporta para uso global
declare global {
    interface Window {
        contactFormManager: ContactFormManager;
    }
}

// Inicializa quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const formManager = new ContactFormManager('contact-form');
        formManager.init();
        window.contactFormManager = formManager;
    });
} else {
    const formManager = new ContactFormManager('contact-form');
    formManager.init();
    window.contactFormManager = formManager;
}

