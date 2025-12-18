#!/bin/bash

# Script para macOS - pode ser aberto com duplo clique
# Inicia o servidor local e abre o navegador automaticamente

cd "$(dirname "$0")"

echo "🚀 Storm GO - Iniciando servidor local..."
echo ""

# Verifica se o PHP está disponível
if command -v php &> /dev/null; then
    echo "✅ Usando servidor PHP embutido"
    cd html
    sleep 1
    open "http://localhost:8000/index.html"
    php -S localhost:8000
else
    # Tenta usar Python 3
    if command -v python3 &> /dev/null; then
        echo "✅ Usando servidor HTTP do Python 3"
        cd html
        sleep 1
        open "http://localhost:8000/index.html"
        python3 -m http.server 8000
    else
        echo "❌ Erro: Nenhum servidor encontrado."
        echo ""
        echo "Por favor, instale PHP ou Python 3"
        echo "Pressione qualquer tecla para sair..."
        read -n 1
        exit 1
    fi
fi

