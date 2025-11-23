# 📤 Como Subir Projeto para o GitHub

## 🎯 Objetivo
Subir seu projeto para o GitHub para depois fazer deploy na Vercel.

---

## 📝 Passo a Passo

### **PASSO 1: Criar Conta no GitHub (se não tiver)**

1. Acesse: https://github.com
2. Clique em **"Sign up"**
3. Preencha seus dados
4. Confirme seu email

### **PASSO 2: Criar Repositório no GitHub**

1. No GitHub, clique no **"+"** (canto superior direito)
2. Clique em **"New repository"**
3. Preencha:
   - **Repository name:** `gustavo-portfolio` (ou outro nome)
   - **Description:** (opcional) "Meu portfólio profissional"
   - **Public** ou **Private** (escolha)
4. **NÃO** marque "Add README" (você já tem arquivos)
5. Clique em **"Create repository"**

### **PASSO 3: Instalar Git (se não tiver)**

**Windows:**
1. Baixe: https://git-scm.com/download/win
2. Instale (deixe tudo padrão)
3. Reinicie o terminal

**Verificar se instalou:**
```bash
git --version
```

### **PASSO 4: Configurar Git (primeira vez)**

Abra o terminal na pasta do projeto e execute:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@gmail.com"
```

### **PASSO 5: Inicializar Git no Projeto**

No terminal, na pasta `D:\Portfolio`, execute:

```bash
git init
```

### **PASSO 6: Adicionar Arquivos**

```bash
git add .
```

### **PASSO 7: Fazer Primeiro Commit**

```bash
git commit -m "Primeiro commit - Portfólio completo"
```

### **PASSO 8: Conectar com GitHub**

1. No GitHub, copie a URL do repositório (exemplo: `https://github.com/seu-usuario/gustavo-portfolio.git`)

2. No terminal, execute (substitua pela sua URL):

```bash
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

### **PASSO 9: Enviar para o GitHub**

```bash
git branch -M main
git push -u origin main
```

Se pedir login:
- **Username:** seu usuário do GitHub
- **Password:** use um **Personal Access Token** (veja abaixo)

---

## 🔑 Criar Personal Access Token (se pedir senha)

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Clique em **"Generate new token"**
3. Dê um nome: "Portfolio"
4. Marque: **repo** (todas as opções de repo)
5. Clique em **"Generate token"**
6. **COPIE o token** (só aparece uma vez!)
7. Use esse token como senha quando pedir

---

## ✅ Verificar

1. Acesse seu repositório no GitHub
2. Veja se todos os arquivos apareceram
3. Pronto! 🎉

---

## 🔄 Atualizar o Projeto (quando fizer mudanças)

```bash
git add .
git commit -m "Descrição da mudança"
git push
```

---

## ⚠️ Arquivos que NÃO vão para o GitHub

O arquivo `.gitignore` já está configurado para não enviar:
- `node_modules/`
- `.next/`
- `.env` (suas senhas - importante!)
- Outros arquivos sensíveis

---

## 🆘 Problemas Comuns

### Erro: "fatal: not a git repository"
→ Execute `git init` primeiro

### Erro: "Please tell me who you are"
→ Execute os comandos do PASSO 4

### Erro: "remote origin already exists"
→ Execute: `git remote remove origin`
→ Depois execute o PASSO 8 novamente

---

**Pronto! Agora você pode fazer deploy na Vercel!** 🚀

