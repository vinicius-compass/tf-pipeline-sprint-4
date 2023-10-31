const express = require('express');
const router = express.Router();

const chuckNorrisJokeController = require('../controllers/ChuckNorrisJokeController');
//const RandomActivityController = require('./controllers/RandomActivityController');

router.get('/', (req, res) => {
  res.status(200).send('Este é o app do Grupo 4 😀');
});

/*nomedafuncaonocontroller modifica para o nome da função que adicionar nos controllers onde contém a lógica de processamento que comunica com o model*/
router.get('/api/piadas', chuckNorrisJokeController.getChuckNorrisJoke);
//router.get('/api/atividades', RandomActivityController.nomedafuncaonocontroller);

module.exports = router;