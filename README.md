# Storm GO - Landing Page

Landing page moderna e responsiva para a extensão Storm GO, uma extensão Chrome para disparos em massa via WhatsApp Web.

## 📁 Estrutura do Projeto

```
WebPageStormGO/
├── html/
│   ├── index.html                 # Página principal
│   ├── components/                # Componentes reutilizáveis
│   │   ├── header.html
│   │   └── footer.html
│   └── sections/                  # Seções da página
│       ├── hero.html
│       ├── features.html
│       ├── pricing.html
│       ├── testimonials.html
│       └── cta.html
├── css/
│   ├── main.css                   # Estilos globais
│   ├── components/                # Estilos dos componentes
│   │   ├── header.css
│   │   └── footer.css
│   └── sections/                  # Estilos das seções
│       ├── hero.css
│       ├── features.css
│       ├── pricing.css
│       ├── testimonials.css
│       └── cta.css
├── js/
│   ├── main.js                    # JavaScript principal
│   ├── utils/                     # Utilitários
│   │   └── loader.js
│   ├── components/                # JavaScript dos componentes
│   │   ├── header.js
│   │   └── footer.js
│   └── sections/                  # JavaScript das seções
│       ├── hero.js
│       ├── features.js
│       ├── pricing.js
│       ├── testimonials.js
│       └── cta.js
├── ts/                            # TypeScript (opcional)
│   ├── components/
│   │   ├── header.ts
│   │   └── form.ts
│   └── utils/
│       └── types.ts
├── php/                           # Backend PHP
│   ├── api/
│   │   └── contact.php
│   ├── handlers/
│   │   └── email.php
│   └── config.php
└── assets/                        # Recursos estáticos
    ├── images/
    └── icons/
```

## 🚀 Como Usar

### Desenvolvimento Local

1. **Servidor PHP simples:**
   ```bash
   cd WebPageStormGO
   php -S localhost:8000
   ```

2. **Ou use um servidor web (Apache/Nginx):**
   - Configure o DocumentRoot para a pasta `html/`
   - Certifique-se de que o PHP está habilitado

3. **Acesse no navegador:**
   ```
   http://localhost:8000/html/index.html
   ```

### Configuração PHP

1. Edite `php/config.php` com suas configurações:
   - Email SMTP
   - Credenciais de banco de dados (se necessário)
   - Domínios permitidos

2. Crie a pasta `data/` para armazenar contatos:
   ```bash
   mkdir -p data
   chmod 755 data
   ```

## 📝 Características

- ✅ Design moderno e responsivo
- ✅ Componentes modulares e reutilizáveis
- ✅ Animações suaves
- ✅ Formulário de contato funcional
- ✅ SEO otimizado
- ✅ Acessibilidade
- ✅ Performance otimizada

## 🎨 Personalização

### Cores

Edite as variáveis CSS em `css/main.css`:

```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --secondary-color: #10b981;
    /* ... */
}
```

### Conteúdo

- Edite os arquivos HTML em `html/sections/` para alterar o conteúdo
- Modifique os textos diretamente nos arquivos HTML

## 📧 Formulário de Contato

O formulário de contato salva os dados em `data/contacts.json`. Para produção:

1. Configure um banco de dados
2. Atualize `php/api/contact.php` para usar o banco
3. Configure o envio de emails em `php/config.php`

## 🔧 Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS)
- JavaScript (ES6+)
- TypeScript (opcional)
- PHP 7.4+

## 📱 Responsividade

A página é totalmente responsiva e funciona em:
- Desktop (1280px+)
- Tablet (768px - 1279px)
- Mobile (até 767px)

## 📄 Licença

Este projeto foi criado para a extensão Storm GO.

## 🤝 Suporte

Para dúvidas ou suporte, entre em contato através do formulário na página.

