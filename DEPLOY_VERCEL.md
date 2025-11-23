# 🚀 Como Fazer Deploy na Vercel (GRÁTIS!)

## Por que Vercel?

- ✅ **100% GRÁTIS** para projetos pessoais
- ✅ Feito especialmente para **Next.js**
- ✅ Deploy em **2 minutos**
- ✅ Suporta todas as **APIs** do seu projeto
- ✅ **SSL automático** (HTTPS)
- ✅ **Domínio personalizado** grátis

---

## 📝 Passo a Passo

### **PASSO 1: Criar Conta na Vercel**

1. Acesse: https://vercel.com
2. Clique em **"Sign Up"**
3. Escolha uma opção:
   - **GitHub** (recomendado - mais fácil)
   - Email
   - GitLab
   - Bitbucket

### **PASSO 2: Conectar Projeto**

**Opção A - Com GitHub (Recomendado):**

1. No Vercel, clique em **"Add New Project"**
2. Se você já tem o projeto no GitHub:
   - Selecione o repositório
   - Clique em **"Import"**
3. Se não tem no GitHub:
   - Crie um repositório no GitHub
   - Faça upload do seu projeto
   - Depois importe no Vercel

**Opção B - Upload Direto:**

1. No Vercel, clique em **"Add New Project"**
2. Clique em **"Browse"** ou arraste a pasta do projeto
3. Faça upload

### **PASSO 3: Configurar Projeto**

1. O Vercel vai detectar automaticamente que é Next.js
2. Deixe as configurações padrão:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build` (já vem preenchido)
   - **Output Directory:** `.next` (já vem preenchido)

### **PASSO 4: Adicionar Variáveis de Ambiente**

1. Antes de fazer deploy, clique em **"Environment Variables"**
2. Adicione uma por uma:

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = seu-email@gmail.com
SMTP_PASSWORD = sua-senha-de-app-gmail
CONTACT_EMAIL = seu-email@gmail.com
NODE_ENV = production
```

3. Use os **mesmos valores** do seu arquivo `.env`

### **PASSO 5: Fazer Deploy**

1. Clique em **"Deploy"**
2. Aguarde 2-3 minutos
3. Pronto! Seu site está no ar! 🎉

### **PASSO 6: Conectar Domínio (Opcional)**

Se você quer usar seu domínio da Hostinger (gustavodesign.tech):

1. No Vercel, vá em **"Settings"** → **"Domains"**
2. Digite: `gustavodesign.tech`
3. Clique em **"Add"**
4. O Vercel vai te dar instruções de DNS
5. Vá no painel da Hostinger → **Domínios** → **DNS**
6. Configure conforme as instruções do Vercel
7. Aguarde alguns minutos para propagar

---

## ✅ Pronto!

Seu site estará disponível em:
- `seu-projeto.vercel.app` (domínio grátis da Vercel)
- OU `gustavodesign.tech` (se conectou seu domínio)

---

## 🔧 Atualizar o Site

Sempre que você fizer mudanças:

**Se conectou GitHub:**
- Faça commit e push
- Vercel atualiza automaticamente!

**Se fez upload direto:**
- Faça upload novamente
- Ou conecte GitHub para atualização automática

---

## 📞 Precisa de Ajuda?

- Documentação: https://vercel.com/docs
- Suporte: https://vercel.com/support

---

**Dica:** A Vercel é muito mais fácil que Hostinger para Next.js! 🚀

