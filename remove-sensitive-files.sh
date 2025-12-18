#!/bin/bash

# Script para remover arquivos sensíveis do rastreamento do Git
# Este script remove os arquivos do índice do Git mas mantém as cópias locais

echo "🔒 Removendo arquivos sensíveis do rastreamento do Git..."
echo ""

# Verifica se estamos em um repositório Git
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Erro: Este diretório não é um repositório Git"
    exit 1
fi

# Lista de arquivos sensíveis para remover do rastreamento
SENSITIVE_FILES=(
    "php/config.php"
    "start-server.sh"
    "Iniciar Servidor.command"
)

echo "📋 Arquivos que serão removidos do rastreamento:"
for file in "${SENSITIVE_FILES[@]}"; do
    if git ls-files --error-unmatch "$file" > /dev/null 2>&1; then
        echo "  - $file"
    else
        echo "  - $file (já não está sendo rastreado)"
    fi
done

echo ""
read -p "Continuar? (s/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    echo "❌ Operação cancelada"
    exit 1
fi

echo ""
echo "🗑️  Removendo arquivos do índice do Git..."
echo ""

# Remove cada arquivo do índice
for file in "${SENSITIVE_FILES[@]}"; do
    if git ls-files --error-unmatch "$file" > /dev/null 2>&1; then
        git rm --cached "$file" 2>/dev/null
        if [ $? -eq 0 ]; then
            echo "✅ Removido: $file"
        else
            echo "⚠️  Erro ao remover: $file"
        fi
    fi
done

echo ""
echo "✅ Arquivos removidos do rastreamento do Git"
echo ""
echo "📝 Próximos passos:"
echo "   1. Revise as mudanças: git status"
echo "   2. Faça commit: git commit -m 'Remove arquivos sensíveis do repositório'"
echo "   3. Envie para o repositório: git push"
echo ""
echo "⚠️  IMPORTANTE: Os arquivos ainda existem localmente, apenas foram removidos do Git"
echo "   Se você quer removê-los completamente do histórico, consulte SECURITY.md"

