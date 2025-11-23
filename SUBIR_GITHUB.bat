@echo off
echo ========================================
echo   SUBINDO PROJETO PARA O GITHUB
echo ========================================
echo.

echo Verificando se Git esta instalado...
git --version >nul 2>&1
if errorlevel 1 (
    echo.
    echo ERRO: Git nao esta instalado!
    echo.
    echo Baixe em: https://git-scm.com/download/win
    echo Instale e execute este script novamente.
    pause
    exit /b 1
)

echo Git encontrado!
echo.

echo [1/5] Inicializando Git...
if exist ".git" (
    echo Git ja inicializado.
) else (
    git init
    if errorlevel 1 (
        echo ERRO ao inicializar Git!
        pause
        exit /b 1
    )
    echo Git inicializado com sucesso!
)

echo.
echo [2/5] Verificando configuracoes do Git...
git config user.name >nul 2>&1
if errorlevel 1 (
    echo.
    echo Git nao esta configurado!
    echo.
    set /p GIT_NAME="Digite seu nome: "
    set /p GIT_EMAIL="Digite seu email: "
    git config --global user.name "%GIT_NAME%"
    git config --global user.email "%GIT_EMAIL%"
    echo Configuracao salva!
)

echo.
echo [3/5] Adicionando arquivos...
git add .
if errorlevel 1 (
    echo ERRO ao adicionar arquivos!
    pause
    exit /b 1
)
echo Arquivos adicionados!

echo.
echo [4/5] Fazendo commit...
git commit -m "Primeiro commit - Portfolio completo" >nul 2>&1
if errorlevel 1 (
    echo AVISO: Nenhuma mudanca para commitar ou commit ja feito.
) else (
    echo Commit realizado com sucesso!
)

echo.
echo [5/5] Configurando GitHub...
echo.
echo IMPORTANTE: Voce precisa ter criado o repositorio no GitHub primeiro!
echo.
set /p GITHUB_URL="Cole a URL do seu repositorio GitHub (ex: https://github.com/usuario/repositorio.git): "

git remote remove origin >nul 2>&1
git remote add origin "%GITHUB_URL%"
if errorlevel 1 (
    echo ERRO ao conectar com GitHub!
    echo Verifique se a URL esta correta.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   CONFIGURACAO CONCLUIDA!
echo ========================================
echo.
echo Agora execute no terminal:
echo   git branch -M main
echo   git push -u origin main
echo.
echo Se pedir login:
echo   Username: seu usuario do GitHub
echo   Password: use Personal Access Token
echo.
echo Para criar token:
echo   GitHub -^> Settings -^> Developer settings -^> Personal access tokens
echo.
pause

