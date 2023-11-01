<h1 align="center"> Avaliação Sprint 4 - Programa de Bolsas Compass UOL / AWS e UTFPR </h1>

Sistema criado para a avaliação da quarta sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.

<p>O projeto foi feito com JavaScript/NodeJS, ele se resume a um software que consome duas APIs distintas e é hospedado na <a href="https://aws.amazon.com/pt/">AWS</a>.

# Índice

<!--ts-->
   * [Instruções](#Instrucoes)
   * [Funcionamento](#Funcionamento)
   * [Desenvolvimento do projeto](#Desenvolvimento-do-projeto)
      * [Trello](#Trello)
      * [Desenvolvimento do código](#Desenvolvimento-do-código)
      * [Tecnologias](#Tecnologias)
      * [Dificuldades](#Dificuldades)
   * [Autores](#Autores)
<!--te-->

# Instruções

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
<a href="https://git-scm.com">Git</a>, <a href="https://nodejs.org/en/">NodeJS</a>. 
Além disto é bom ter um editor para trabalhar com o código como <a href="https://code.visualstudio.com/">VSCode</a>.

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/Compass-pb-aws-2023-UTFPR/sprint-4-pb-aws-utfpr.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd sprint-4-pb-aws-utfpr

# Realize o pull da branch equipe-3
$ git pull origin grupo-3

# Vá para a pasta root
$ cd root

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>

# Para acessar a rota de atividades acesse <http://localhost:8080/api/atividades>

# Para acessar a rota de atividades acesse <http://localhost:8080/api/piadas>
```

### Estruturação de pastas

```
root/
├── routes/
│ ├── router.js/
├── app.js
├── package-lock.json
├── package.json

```

# Funcionamento

<p align="center">O sistema possui 3 finalidades</p>

1. Retornar uma mensagem simples na rota raiz
<img src="root\frontend\rotaRaiz.png">

2. Retornar uma piada do Chuck Norris na rota Get/api/piadas
<img src="root\frontend\rotaPiadas.jpeg">

3. Retornar uma atividade na rota Get/api/atividades
<img src="root\frontend\rotaAtividades.jpeg">

# Desenvolvimento do projeto

## Trello

Antes mesmo de iniciar o projeto, foi estabelecida uma área de trabalho no <a href="https://trello.com/pt-BR">Trello</a> com o propósito de proporcionar à equipe um ambiente propício à organização e à distribuição de tarefas.

<img src="root\frontend\public\images\trello.png">

O Trello se trata de uma ferramenta visual que viabiliza uma visão mais clara e eficaz das atividades pendentes e de quem está encarregado de cada uma. Fundamentado no método Kanban, o sistema utiliza quadros, listas e cartões para simplificar e flexibilizar o processo de organização.

## Desenvolvimento do código

O processo de desenvolvimento do código foi iniciado estabelecendo os arquivos necessários para a configuração do <a href="https://nodejs.org/en">NodeJS</a>, sendo eles o "package.json" e o "package-lock.json". Em seguida, as dependências "Axios" e "Nodemon" foram incluídas.

Posteriormente, o servidor foi inicializado e uma rota raiz foi estabelecida, com a finalidade de retornar a mensagem solicitada. Depois, foi desenvolvida uma rota que disponibiliza a API de atividades. Por último, adicionou-se a rota referente à API das piadas de Chuck Norris.

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- JavaScript
- <a href="https://nodejs.org/en">NodeJS</a>
- <a href="https://expressjs.com/pt-br/">Express</a>
- <a href="https://aws.amazon.com/pt/">AWS</a>
- <a href="https://trello.com/pt-BR">Trello</a>


## Dificuldades




# Autores

| <img style="border-radius: 50%;" src=root\frontend\devBeatriz.jpeg width="300px;" alt=""/><br><sub>Beatriz Milanezi Lopes</sub> | <img style="border-radius: 50%;" src=root\frontend\devIsaac.jpeg width="800px;" alt=""/><br><sub>Isaac Fiuza Vieira</sub> | <img style="border-radius: 50%;" src=root\frontend\devJoao.png width="100px;" alt=""/><br><sub>João Vitor Schiavinato Delfino</sub> | <img style="border-radius: 50%;" src=root\frontend\devPedro.jpeg width="300px;" alt=""/><br><sub>Pedro Dotto Marafiga</sub> |
| :---: | :---: | :---: | :---:|
