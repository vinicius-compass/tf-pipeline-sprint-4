const express = require('express');
const app = express();

const routes = require('./routes/routes');

app.use('/', routes);

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
});