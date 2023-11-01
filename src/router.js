


const express = require('express');
const router = express.Router();
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

//Rota principal
router.get('/', (req, res) => {
  res.status(200).send('Este é o app do grupo 2 ✌😉');
});

//Rota da API de piadas (rota/api/piadas).
router.get('/api/piadas', async (req, res) => {
  try {
    const chuckNorrisResponse = await axios.get('https://api.chucknorris.io/jokes/random');
    const chuckNorrisData = chuckNorrisResponse.data;

    const formattedDataAtualizacao = new Date(chuckNorrisData.updated_at).toLocaleDateString('pt-BR');
    const formattedDataCriacao = new Date(chuckNorrisData.created_at).toLocaleDateString('pt-BR');

    // Guid aleatorio
    const guid = uuidv4();

    const formattedData = {
        data_atualizacao: formattedDataAtualizacao,
      data_criacao: formattedDataCriacao,
        icone: chuckNorrisData.icon_url,
        id: guid,
        piada: chuckNorrisData.value.toUpperCase(),
        referencia: chuckNorrisData.url,
    };

    res.status(200).json(formattedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Rota da API de atividades (rota/api/atividades).
router.get('/api/atividades', async (req, res) => {
  try {
    const atividadesResponse = await axios.get('https://www.boredapi.com/api/activity');
    const atividadesData = atividadesResponse.data;

    const formattedData = {
      id: uuidv4(),
      atividade: atividadesData.activity,
      tipo: atividadesData.type,
      participantes: atividadesData.participants,
      acessibilidade: `${Math.floor(atividadesData.accessibility * 100)}%`,
    };

    res.status(200).json(formattedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
