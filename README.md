# Sistema de Suporte ao Usuário - API Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

API RESTful para um sistema de gerenciamento de tickets de suporte. Este projeto serve como backend para uma aplicação onde usuários podem registrar e acompanhar o status de tickets, e administradores podem gerenciar as solicitações.

## 🚀 Sobre o Projeto

Este projeto foi desenvolvido para demonstrar a construção de uma API RESTful completa com Node.js e Express, focada em segurança e operações CRUD. A aplicação utiliza um banco de dados NoSQL (MongoDB) para flexibilidade no armazenamento de dados e implementa um sistema de autenticação robusto baseado em JWT para proteger os endpoints e garantir a privacidade dos dados dos usuários e tickets.

## ✨ Features

* **Autenticação Segura com JWT:** Sistema de registro e login que gera JSON Web Tokens para autorizar o acesso dos usuários.
* **Proteção de Rotas com Middleware:** Implementação de um middleware customizado que intercepta requisições a rotas privadas e valida o token de autenticação.
* **CRUD de Usuários:** Endpoints para o registro e autenticação de usuários.
* **CRUD de Tickets:** Funcionalidade completa para usuários autenticados criarem, visualizarem (apenas os seus), atualizarem e deletarem tickets de suporte.
* **Gestão de Erros:** Tratamento de erros centralizado para fornecer feedback claro e consistente para o cliente da API.

## 🛠️ Tech Stack

* **Ambiente de Execução:** [Node.js](https://nodejs.org/en/)
* **Framework:** [Express.js](https://expressjs.com/)
* **Banco de Dados:** [MongoDB](https://www.mongodb.com/) (com [Mongoose](https://mongoosejs.com/))
* **Autenticação:** [JWT (JSON Web Tokens)](https://jwt.io/)
* **Criptografia de Senhas:** [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js)

## ⚙️ Como Rodar o Projeto Localmente

Para executar este projeto no seu ambiente de desenvolvimento, siga os passos abaixo.

### Pré-requisitos

* [Node.js](https://nodejs.org/en/) (v18 ou superior)
* Uma instância do [MongoDB](https://www.mongodb.com/try/download/community) rodando (localmente ou em um serviço como o MongoDB Atlas).

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/rodrigocvmd/suporte-ao-usuario.git](https://github.com/rodrigocvmd/suporte-ao-usuario.git)
    cd suporte-ao-usuario
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Crie o arquivo de variáveis de ambiente:**
    * Crie um arquivo `.env` na raiz do projeto.
    * Adicione as seguintes variáveis, substituindo pelos seus valores:
    ```env
    NODE_ENV=development
    PORT=5000
    MONGO_URI=sua_string_de_conexao_com_o_mongodb
    JWT_SECRET=seu_segredo_jwt_super_secreto
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

A API estará disponível em `http://localhost:5000` (ou a porta que você definiu).

## 📄 Licença

Este projeto está sob a licença MIT.