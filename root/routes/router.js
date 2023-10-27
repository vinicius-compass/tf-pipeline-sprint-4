const express = require('express')
const router  = express.Router()
const axios   = require('axios')
const uuid    = require('uuid')

//Rota padrão ------------------------

router.get('/', (req, res) => {
    res.status(200).send({
        mensagem: 'Este é o app do Grupo 3 😃'
    });
});

//Rota /api/atividade ---------------------

router.get('/api/atividades', async (req, res) => {

    try {
        const response = await axios.get('https://www.boredapi.com/api/activity')

        const data = {

        id: uuid.v4(),
        atividade: response.data.activity,
        tipo: response.data.type,
        participantes: response.data.participants,
        acessibilidade: response.data.accessibility*100 + '%',
        }

        res.status(200).send(data)
        
    }catch(error){

        console.error('Erro ao buscar os dados da API:', error);
        res.status(500).send('Erro ao buscar os dados da API');
    }
});

//Rota /api/piadas ---------------------

router.get('/api/piadas', async (req, res) => {

    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random')

        const data = {

        data_atualizacao: response.data.updated_at.slice(0, 10),
        data_criacao: response.data.created_at.slice(0, 10),
        icone: response.data.icon_url,
        id: uuid.v4(),
        piada: response.data.value.replace("Chuck Norris", "CHUCK NORRIS"),
        referencia: response.data.url
        }

        res.status(200).send(data)
        
    } catch(error) {

        console.error('Erro ao buscar os dados da API:', error);
        res.status(500).send('Erro ao buscar os dados da API');
    }
});

module.exports = router