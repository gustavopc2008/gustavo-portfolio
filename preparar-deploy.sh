#!/bin/bash

echo "========================================"
echo "  PREPARANDO PROJETO PARA DEPLOY"
echo "========================================"
echo ""

echo "[1/3] Instalando dependências..."
npm install
if [ $? -ne 0 ]; then
    echo "ERRO ao instalar dependências!"
    exit 1
fi

echo ""
echo "[2/3] Fazendo build do projeto..."
npm run build
if [ $? -ne 0 ]; then
    echo "ERRO ao fazer build!"
    exit 1
fi

echo ""
echo "[3/3] Verificando arquivos necessários..."
if [ ! -f "server.js" ]; then
    echo "AVISO: Arquivo server.js não encontrado!"
fi
if [ ! -f ".env" ]; then
    echo "AVISO: Arquivo .env não encontrado!"
    echo "Crie o arquivo .env com suas configurações de email."
fi

echo ""
echo "========================================"
echo "  BUILD CONCLUÍDO COM SUCESSO!"
echo "========================================"
echo ""
echo "Próximos passos:"
echo "1. Verifique se o arquivo .env existe e está configurado"
echo "2. Faça upload da pasta .next para a Hostinger"
echo "3. Faça upload dos arquivos: server.js, package.json, etc."
echo "4. Configure o Node.js no hPanel da Hostinger"
echo ""

