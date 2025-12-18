# 🔒 Política de Segurança

Este documento descreve quais arquivos são protegidos e por quê.

## 📁 Arquivos Protegidos (não commitados)

Os seguintes arquivos **NÃO** são commitados no repositório por conterem informações sensíveis:

- `php/config.php` - Contém credenciais SMTP, banco de dados e outras configurações sensíveis
- `data/` - Pasta com dados de usuários e contatos
- Scripts locais de servidor (`start-server.sh`, `Iniciar Servidor.command`)

## ✅ Arquivos Públicos

Os seguintes arquivos **SÃO** visíveis no repositório público:

- `html/index.html` e todos os componentes HTML
- Estrutura completa do projeto (CSS, JS, TypeScript)
- `php/config.example.php` - Arquivo de exemplo sem credenciais reais
- Código PHP de APIs (sem credenciais hardcoded)
- README e documentação

## 🚀 Configuração Local

Para configurar o projeto localmente:

1. Copie o arquivo de exemplo:
   ```bash
   cp php/config.example.php php/config.php
   ```

2. Edite `php/config.php` com suas credenciais reais

3. Nunca commite o arquivo `config.php` - ele já está no `.gitignore`

## ⚠️ Se você commitou acidentalmente arquivos sensíveis

Se você acidentalmente commitou `config.php` ou outros arquivos sensíveis:

1. Remova do histórico do Git:
   ```bash
   git rm --cached php/config.php
   git commit -m "Remove arquivo sensível do repositório"
   git push
   ```

2. Se as credenciais foram expostas, **IMEDIATAMENTE**:
   - Altere todas as senhas e credenciais expostas
   - Revise logs de acesso
   - Considere criar novas credenciais

3. Para remover do histórico completo (se necessário):
   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch php/config.php" \
     --prune-empty --tag-name-filter cat -- --all
   ```

## 📝 Mantendo Segurança

- ✅ Use sempre `config.example.php` como template
- ✅ Nunca commite arquivos com credenciais reais
- ✅ Use variáveis de ambiente em produção quando possível
- ✅ Revise o `.gitignore` antes de commits grandes
- ✅ Use `git status` para verificar o que será commitado

