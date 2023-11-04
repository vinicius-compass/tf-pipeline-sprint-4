# Aplicação de Piadas e Atividades

## 💻 Sobre o Projeto

Este projeto é uma aplicação web que intregra duas APis diferentes: a API do Chuck Norris e Bored API. Ele oferece três rotas: a primeira rota ("/"), a segunda rota ("/api/piadas"), e a terceira rota ("/api/atividades"). Além disso, essa aplicação está hospedada na AWS através do Elastic Beanstalk.

## ⚙️ Funcionalidades

- **Integração da API de Piadas do Chuck Norris**: 

1. Permite que os usuários obtenham piadas aleatórias.
2. Formata a piada para destacar "CHUCK NORRIS".
3. Inclue informações como data de atualização, data de criação, um ícone, um ID exclusivo e uma referência à fonte da piada.

- **Integração da API de Atividades do Bored API**: 

1. Permite que os usuários obtenham atividades aleatórias.
2. Fornece informações sobre o tipo de atividade, o número de participantes necessários e o nível de acessibilidade.

## 🔧 Pré-Requisitos

- Antes de executar o projeto, é necessario ter os seguintes softwares instalados em sua máquina:

1. [Node.js](https://nodejs.org/): Permite executar o código JavaScript no lado do servidor.
2. [NPM(Node Package Manager)](https://www.npmjs.com/): É o gerenciador de pacotes do Node.js.

Certifique-se de que esses pré-requisitos estejam instalados antes de seguir as instruções de uso.

## 🚀 Instruções de Uso

1. Clone o repositório: `git clone https://github.com/seu-nome/seu-repo.git`

2. Instale as dependências necessárias: `npm install`

3. Inicie a aplicação: `npm start`

4. Abra o projeto em seu navegador da web:

- Para acessar a raiz do projeto: Acesse [`http://localhost:8080/`](http://localhost:8080/).

- Para obter uma piada do Chuck Norris: Acesse [`http://localhost:8080/api/piadas`](http://localhost:8080/api/piadas).

- Para obter uma atividade aleatória: Acesse [`http://localhost:8080/api/atividades`](http://localhost:8080/api/atividades).

5. Para abrir a aplicação pelo serviço Elastic Beanstalk da AWS. Acesse:  [`http://sprint4-env-1.eba-pa3gqgee.us-east-1.elasticbeanstalk.com/`](http://sprint4-env-1.eba-pa3gqgee.us-east-1.elasticbeanstalk.com/).

## 🛠️ Tecnologias

- [AWS](https://aws.amazon.com/)
- [Axios](https://axios-http.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [UUID (para geração de IDs exclusivos)](https://www.npmjs.com/package/uuid)

## ✒️ Autores

- Davi Angelo Polese Magalhães
- Guilherme Munhos Matos
- Ingryd Belazzi Alves
- Sergio Vinicius Lima