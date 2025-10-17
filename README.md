<<<<<<< HEAD
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

A API estará disponível em `http://localhost:5000`.

## 📄 Licença

Este projeto está sob a licença MIT.
=======
# Sistema de Gerenciamento de Tickets - Backend Robust

Este projeto é um sistema backend robusto e escalável para gerenciamento de tickets e ocorrências, incluindo abertura, acompanhamento e controle de estados de resolução. Ele garante uma comunicação fluida e segura com o frontend por meio de uma **API RESTful** eficiente. A aplicação destaca-se pela implementação de autenticação segura com **JWT (JSON Web Tokens)** e pela proteção de rotas privadas, assegurando que apenas usuários autenticados possam acessar áreas sensíveis.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para o backend.
- **Express.js**: Framework para criação de rotas e lógica da API RESTful.
- **MongoDB**: Banco de dados NoSQL para armazenamento de tickets e usuários.
- **JWT (JSON Web Tokens)**: Autenticação e autorização seguras.
- **Redux** (no frontend): Gerenciamento global do estado para integração com o backend.
- **Middleware**: Verificação de tokens e proteção de rotas privadas.

---

## 🌟 Destaques do Projeto

### 1. **API RESTful Completa**
- Endpoints para criação, leitura, atualização e exclusão de tickets.
- Integração eficiente com o frontend para operações em tempo real.
- Estrutura modular para facilitar manutenção e escalabilidade.

---

### 2. **Autenticação Segura**
- **JWT**:
  - Geração de tokens para autenticação de usuários.
  - Validação de tokens em cada requisição para proteção de dados.
- **Middleware Personalizado**:
  - Verificação automática de autenticação em rotas privadas.
  - Bloqueio de acessos não autorizados.

---

### 3. **Gestão de Erros e Feedback**
- Sistema de registro e tratamento de erros:
  - Mensagens claras e específicas para o usuário.
  - Logs para monitoramento de falhas no backend.
- Respostas em tempo real para operações, como erros de autenticação ou falhas no envio de dados.

---

### 4. **Segurança e Proteção de Dados**
- Proteção de rotas sensíveis.
- Implementação de práticas recomendadas para proteção de dados do usuário.
- Estruturação segura para evitar vulnerabilidades, como ataques de força bruta ou injeção de código.

---

## 🚀 Funcionalidades

- **Gerenciamento de Tickets**:
  - Criação, acompanhamento e exclusão de ocorrências.
  - Atualização de estados de resolução.
- **Autenticação de Usuários**:
  - Login seguro com JWT.
  - Validação automática de tokens para proteger rotas privadas.
- **Feedback ao Usuário**:
  - Notificações em tempo real sobre erros e operações concluídas.
- **Integração com Frontend**:
  - Comunicação em tempo real via API RESTful.

---

## 💡 Desafios e Soluções

- **Autenticação e Autorização**:
  - Implementação de **middleware** para validação de tokens JWT.
  - Proteção robusta de rotas para bloquear acessos não autorizados.
- **Gestão de Erros**:
  - Sistema de tratamento de erros com respostas claras para o usuário e logs detalhados para análise.
- **Integração com o Frontend**:
  - Garantir sincronização de estados usando Redux para operações em tempo real.

---

## 📝 Aprendizados

Este projeto proporcionou um aprendizado significativo sobre:
- Desenvolvimento de backend escalável e seguro.
- Implementação de autenticação e autorização com JWT.
- Criação de APIs RESTful com Express.js e MongoDB.
- Proteção de rotas privadas com middleware personalizado.
- Arquitetura modular para escalabilidade e manutenibilidade.

---

## 🛠️ Como Executar

1. Clone o repositório:
   `git clone https://github.com/rodrigocvmd/suporte-ao-usuario.git`

2. Instale as dependências:
   `npm install`

3. Inicie a aplicação:
   `npm start`

4. Acesse a aplicação em 'http://localhost:3000' ou na porta que estiver utilizando.
5. 
>>>>>>> 895894fe6de671d9d4a64cbec51bf4652f60c4ff
