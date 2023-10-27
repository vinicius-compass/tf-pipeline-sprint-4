const express    = require('express')
const router     = express.Router()
const axios      = require('axios')
const bodyParser = require('body-parser')

require('dotenv').config();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Este é o app do Grupo 3 😃'
    });
});

module.exports = router