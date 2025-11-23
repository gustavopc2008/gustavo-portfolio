# Sistema de Gerenciamento de Projetos e Depoimentos

Este sistema permite gerenciar projetos do portfólio e depoimentos de clientes através de uma interface administrativa.

## 📍 Acessar o Painel Admin

Acesse: `http://localhost:3000/admin`

## 🎨 Gerenciar Projetos

### Adicionar Novo Projeto
1. Preencha os campos:
   - **Título**: Nome do projeto
   - **Categoria**: Selecione entre Logos, Banners, Social Media ou Sites
   - **URL da Imagem**: Link completo da imagem (pode ser de um serviço de hospedagem ou URL externa)
2. Clique em "Adicionar Projeto"

### Editar Projeto
1. Clique no ícone de edição (lápis) ao lado do projeto
2. Modifique os campos desejados
3. Clique em "Salvar"

### Remover Projeto
1. Clique no ícone de lixeira ao lado do projeto
2. Confirme a remoção

## 💬 Gerenciar Depoimentos

### Adicionar Novo Depoimento
1. Preencha os campos:
   - **Nome**: Nome do cliente
   - **Cargo/Empresa**: Cargo ou empresa do cliente
   - **Depoimento**: Texto do depoimento
   - **Avaliação**: Selecione de 1 a 5 estrelas
2. Clique em "Adicionar Depoimento"

### Editar Depoimento
1. Clique no ícone de edição (lápis) ao lado do depoimento
2. Modifique os campos desejados
3. Clique em "Salvar"

### Remover Depoimento
1. Clique no ícone de lixeira ao lado do depoimento
2. Confirme a remoção

## 📁 Estrutura de Dados

Os dados são armazenados em arquivos JSON na pasta `data/`:
- `data/portfolio.json` - Lista de projetos
- `data/testimonials.json` - Lista de depoimentos

## 🔄 Atualização Automática

As alterações feitas no painel admin são automaticamente refletidas no site. Os componentes `Portfolio` e `Testimonials` carregam os dados das APIs que leem os arquivos JSON.

## ⚠️ Nota Importante

- Os arquivos JSON são salvos diretamente no servidor
- Certifique-se de fazer backup dos dados regularmente
- Em produção, considere adicionar autenticação ao painel admin

