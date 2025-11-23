# 🚀 COMO COLOCAR SEU PORTFÓLIO NO AR - HOSTINGER

## ⚠️ ANTES DE COMEÇAR

Você precisa ter:
- ✅ Conta na Hostinger com plano que tenha **Node.js** (não funciona com hospedagem simples)
- ✅ Seu email Gmail para configurar o formulário de contato

---

## 📝 PASSO A PASSO SIMPLIFICADO

### **PASSO 1: Preparar o projeto no seu computador**

1. Abra o terminal/prompt de comando na pasta do projeto
2. Execute estes comandos:

```bash
npm install
npm run build
```

Isso vai criar a pasta `.next` (é normal, não mexa nela).

3. Crie um arquivo chamado `.env` na raiz do projeto com este conteúdo:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASSWORD=senha-do-app-gmail
CONTACT_EMAIL=seu-email@gmail.com
NODE_ENV=production
```

**⚠️ IMPORTANTE:** Para o `SMTP_PASSWORD`, você precisa criar uma "Senha de App" do Gmail:
- Acesse: https://myaccount.google.com/apppasswords
- Gere uma senha de app
- Cole essa senha no `.env`

---

### **PASSO 2: Fazer upload dos arquivos para a Hostinger**

1. Entre no **hPanel** da Hostinger
2. Vá em **File Manager**
3. Entre na pasta `public_html` (ou a pasta do seu domínio)
4. **Delete tudo que tiver lá** (se for um site novo)
5. Faça upload destas pastas e arquivos:

**Pastas:**
- `.next/` (pasta inteira)
- `public/` (pasta inteira)
- `data/` (pasta inteira)
- `node_modules/` (pasta inteira - ou instale depois no servidor)

**Arquivos:**
- `package.json`
- `package-lock.json`
- `next.config.js`
- `tsconfig.json`
- `tailwind.config.ts`
- `postcss.config.js`
- `server.js`
- `.htaccess`
- `.env` (o arquivo que você criou com suas senhas)

**💡 Dica:** Se o upload for muito lento, você pode fazer upload só dos arquivos principais e depois instalar as dependências no servidor.

---

### **PASSO 3: Configurar Node.js no hPanel**

1. No **hPanel**, procure por **Node.js** (geralmente está no menu principal)
2. Clique em **Node.js**
3. Selecione seu domínio
4. Configure assim:

```
Node.js Version: 18.x ou 20.x (escolha uma)
Application Mode: Production
Application Root: /public_html
Application URL: /
Application Startup File: server.js
```

5. Clique em **Salvar** ou **Create**

---

### **PASSO 4: Configurar variáveis de ambiente**

1. Ainda no **Node.js** do hPanel
2. Procure por **Environment Variables** ou **Variáveis de Ambiente**
3. Adicione uma por uma:

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = seu-email@gmail.com
SMTP_PASSWORD = senha-do-app-gmail
CONTACT_EMAIL = seu-email@gmail.com
NODE_ENV = production
```

(Use os mesmos valores do seu arquivo `.env`)

---

### **PASSO 5: Instalar dependências e iniciar**

**Opção A - Pelo hPanel (mais fácil):**

1. No **Node.js** do hPanel
2. Clique em **Run NPM Install** (ou botão similar)
3. Depois clique em **Restart Application**

**Opção B - Pelo Terminal (se tiver acesso SSH):**

1. No hPanel, vá em **Terminal** ou use um programa SSH
2. Digite:

```bash
cd public_html
npm install --production
npm start
```

---

### **PASSO 6: Testar**

1. Abra seu site no navegador
2. Veja se carregou tudo certo
3. Teste o formulário de contato
4. Se der erro, veja a seção de problemas abaixo

---

## ❌ PROBLEMAS COMUNS E SOLUÇÕES

### **Site não carrega / Erro 500**

- Verifique se o `server.js` está na pasta `public_html`
- Veja os logs no hPanel → Node.js → Logs
- Confirme que instalou as dependências (`npm install`)

### **Formulário de contato não funciona**

- Verifique se as variáveis de ambiente estão configuradas no hPanel
- Confirme que a senha do Gmail está correta (App Password)
- Veja os logs de erro no hPanel

### **Erro "Cannot find module"**

- Execute `npm install` no servidor
- Verifique se o `package.json` está completo

### **Página em branco**

- Verifique se a pasta `.next` foi enviada completamente
- Confirme que fez `npm run build` antes de fazer upload

---

## 📞 PRECISA DE AJUDA?

1. Veja os **logs** no hPanel → Node.js → Logs
2. Abra o navegador, pressione **F12** e veja se tem erros no Console
3. Entre em contato com o suporte da Hostinger

---

## ✅ CHECKLIST FINAL

Antes de desistir, confira:

- [ ] Fiz `npm run build` no meu computador?
- [ ] Fiz upload da pasta `.next`?
- [ ] Fiz upload do arquivo `server.js`?
- [ ] Configurei o Node.js no hPanel?
- [ ] Coloquei `server.js` como Startup File?
- [ ] Configurei as variáveis de ambiente no hPanel?
- [ ] Instalei as dependências no servidor (`npm install`)?
- [ ] Reiniciei a aplicação no hPanel?

Se marcou tudo, seu site deve estar funcionando! 🎉
