const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 8080;

const routes = require('./routes/routes');

app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});