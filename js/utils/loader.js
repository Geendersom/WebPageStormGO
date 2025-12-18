/**
 * Loader Utility - Carrega componentes HTML dinamicamente
 */
class ComponentLoader {
    constructor() {
        this.components = new Map();
    }

    /**
     * Carrega um componente HTML e insere no container
     * @param {string} containerId - ID do container onde o componente será inserido
     * @param {string} filePath - Caminho do arquivo HTML
     */
    async loadComponent(containerId, filePath) {
        try {
            const container = document.getElementById(containerId);
            if (!container) {
                console.error(`Container ${containerId} não encontrado`);
                return;
            }

            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${filePath}: ${response.statusText}`);
            }

            const html = await response.text();
            container.innerHTML = html;
            
            // Armazena o componente carregado
            this.components.set(containerId, html);
            
            // Dispara evento customizado quando componente é carregado
            container.dispatchEvent(new CustomEvent('componentLoaded', {
                detail: { containerId, filePath }
            }));
        } catch (error) {
            console.error(`Erro ao carregar componente ${filePath}:`, error);
            container.innerHTML = `<p>Erro ao carregar componente</p>`;
        }
    }

    /**
     * Carrega múltiplos componentes
     * @param {Array<{containerId: string, filePath: string}>} components
     */
    async loadComponents(components) {
        const promises = components.map(comp => 
            this.loadComponent(comp.containerId, comp.filePath)
        );
        await Promise.all(promises);
    }
}

// Instância global
const componentLoader = new ComponentLoader();

