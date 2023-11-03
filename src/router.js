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

    const dataAtualizacao = new Date(chuckNorrisData.updated_at)
    const dataCriacao = new Date(chuckNorrisData.created_at)

    // Função para formatar as datas
    function formatarData(data){
      const dia = String(data.getDate()).padStart(2, '0')
      const mes = String(data.getMonth() + 1).padStart(2, '0')
      const ano = data.getFullYear()

      return `${dia}-${mes}-${ano}`
    }

    dataAtualizacaoFormatada = formatarData(dataAtualizacao)
    dataCriacaoFormatada = formatarData(dataCriacao)


    // Guid aleatorio
    const guid = uuidv4();

    //Mensagens formatadas
    const formattedData = {
        data_atualizacao: dataAtualizacaoFormatada,
        data_criacao: dataCriacaoFormatada,
        icone: chuckNorrisData.icon_url,
        id: guid,
        piada: chuckNorrisData.value.replace('Chuck Norris', 'CHUCK NORRIS'),
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

    //Mensaggem formatada
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
