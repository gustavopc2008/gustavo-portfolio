@echo off
echo ========================================
echo   PREPARANDO PROJETO PARA DEPLOY
echo ========================================
echo.

echo [1/3] Instalando dependencias...
call npm install
if errorlevel 1 (
    echo ERRO ao instalar dependencias!
    pause
    exit /b 1
)

echo.
echo [2/3] Fazendo build do projeto...
call npm run build
if errorlevel 1 (
    echo ERRO ao fazer build!
    pause
    exit /b 1
)

echo.
echo [3/3] Verificando arquivos necessarios...
if not exist "server.js" (
    echo AVISO: Arquivo server.js nao encontrado!
)
if not exist ".env" (
    echo AVISO: Arquivo .env nao encontrado!
    echo Crie o arquivo .env com suas configuracoes de email.
)

echo.
echo ========================================
echo   BUILD CONCLUIDO COM SUCESSO!
echo ========================================
echo.
echo Proximos passos:
echo 1. Verifique se o arquivo .env existe e esta configurado
echo 2. Faca upload da pasta .next para a Hostinger
echo 3. Faca upload dos arquivos: server.js, package.json, etc.
echo 4. Configure o Node.js no hPanel da Hostinger
echo.
pause

