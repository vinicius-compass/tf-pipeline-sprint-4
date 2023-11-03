# AWS Elastic Beanstalk

---

## Descrição

Esta aplicação foi desenvolvida com Node.js (Express), seu objetivo é consumir duas APIs diferentes, [Chucknorris](https://api.chucknorris.io/) e [Bored API](https://www.boredapi.com/).  

A aplicação possui três rotas:

1. Rota `/` : Retorna `Este é o app do Grupo 6`.
2. Rota `/api/piadas`: Retorna um json com uma piada aleatória da API Chucknorris.
3. Rota `/api/atividades`: Retorna um json com uma atividade aleatória.

A aplicação foi hospedada na AWS pelo serviço Elastic Beanstalk. Você pode acessar a aplicação por meio do seguinte link: [link para a aplicação].

---

## Tecnologias

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

---

## Organização dos Diretorios

```shell
.
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   └── utils
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── package.json
├── package-lock.json
├── .prettierignore
├── .prettierrc
└── README.md
```

---

## Como utilizar o sistema

>**IMPORTANT**
>
>Para executar essa aplicação é necessário ter instalado Node.js e o NPM. Caso ainda não tenha instalando pode encontrar mais informações [aqui](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) ou [aqui](https://docs.npmjs.com/cli/v10/configuring-npm/install)

Para executar a aplicação localmente, é necessário, primeiramente, realizar o clone deste repositório.

 Após clonar o repositório, acesse a pasta de destino e abra o terminal. Em seguida, digite o comando `npm install` para instalar as dependências do projeto. Uma vez concluída a instalação, inicie a aplicação digitando `npm start`.

A aplicação estará em execução na porta `8080`. No entanto, caso esta porta esteja em uso, é possível alterá-la através da variável `PORT` no arquivo `app.js`, localizado na pasta src.

### Acessando as Rotas

Ao se conectar no servidor local pela url `localhost:8080` deverá aparecer a frase ` Este é o app do Grupo 6 ` como na imagem abaixo:
![https://i.imgur.com/3mQzeua.png](https://i.imgur.com/3mQzeua.png)

Para realizar o `GET` na API do Chuck Norris é necessário inserir `/api/piadas` ao final da URL, então deverá ser retornado os dados como mostrado abaixo:
![https://i.imgur.com/5iiWYP2.png](https://i.imgur.com/5iiWYP2.png)

Para realizar o `GET` na API de atividades é necessário inserir `/api/atividades` ao final da URL, então deverá ser retornado os dados como mostrado abaixo:
![https://i.imgur.com/WsZ9fvX.png](https://i.imgur.com/WsZ9fvX.png)

---

## Dificuldades

## Autores

- [João Paulo Ferreira Neto](https://github.com/JoaoPauloFerreiraN)
- [Vinicius de Carvalho Baggio](https://github.com/vinicius-compass)
- [Vitor Elias Nakagawa Leme](https://github.com/VitorNakagawa)
