#!/bin/bash

# Script para iniciar servidor local para desenvolvimento
# Storm GO - Landing Page

echo "🚀 Iniciando servidor local..."
echo "📁 Diretório: $(pwd)"
echo "🌐 Acesse no navegador: http://localhost:8000/index.html"
echo ""
echo "Para parar o servidor, pressione Ctrl+C"
echo ""

# Verifica se o PHP está disponível
if command -v php &> /dev/null; then
    echo "✅ Usando servidor PHP embutido"
    cd html
    php -S localhost:8000
else
    echo "⚠️  PHP não encontrado. Usando servidor Python como alternativa..."
    # Tenta usar Python 3
    if command -v python3 &> /dev/null; then
        echo "✅ Usando servidor HTTP do Python 3"
        cd html
        python3 -m http.server 8000
    else
        echo "❌ Erro: Nenhum servidor encontrado."
        echo "Por favor, instale PHP ou Python 3:"
        echo "  - macOS: brew install php"
        echo "  - Python já vem instalado no macOS"
        exit 1
    fi
fi

