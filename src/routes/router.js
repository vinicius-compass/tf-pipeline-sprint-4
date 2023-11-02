const express = require('express')
const router  = express.Router()
const apiController = require("../controllers/controller");

router.get('/', (req, res) => {
    res.status(200).send('Este é o app do Grupo 5 😀')
})

router.get('/api/piadas', async (req, res) => {
    const response = await apiController.getJoke()
    console.log(response)
    res.status(200).json(response)
})

router.get('/api/atividades', async (req, res) => {
    const response = await apiController.getActivity()
    console.log(response)
    res.status(200).json(response)
})

module.exports = router