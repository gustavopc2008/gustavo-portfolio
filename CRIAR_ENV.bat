@echo off
echo ========================================
echo   CRIANDO ARQUIVO .env
echo ========================================
echo.

if exist ".env" (
    echo O arquivo .env ja existe!
    echo.
    choice /C SN /M "Deseja sobrescrever? (S/N)"
    if errorlevel 2 goto :end
    if errorlevel 1 goto :create
)

:create
echo Criando arquivo .env a partir do env.example.txt...
copy env.example.txt .env >nul

if exist ".env" (
    echo.
    echo ========================================
    echo   ARQUIVO .env CRIADO COM SUCESSO!
    echo ========================================
    echo.
    echo IMPORTANTE: Agora voce precisa editar o arquivo .env
    echo e colocar suas informacoes reais:
    echo.
    echo 1. Abra o arquivo .env com o Bloco de Notas
    echo 2. Substitua "seu-email@gmail.com" pelo seu email
    echo 3. Substitua "sua-app-password-gmail" pela senha de app do Gmail
    echo.
    echo Para criar senha de app do Gmail:
    echo https://myaccount.google.com/apppasswords
    echo.
    choice /C SN /M "Deseja abrir o arquivo .env agora? (S/N)"
    if errorlevel 1 (
        notepad .env
    )
) else (
    echo ERRO ao criar arquivo .env!
)

:end
pause

