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

    try{
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


module.exports = router

