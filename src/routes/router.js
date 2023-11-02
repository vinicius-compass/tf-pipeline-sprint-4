const express = require('express')
const router  = express.Router()
const apiController = require("../controllers/apiController");

router.get('/', (req, res) => {
    res.status(200).send('Este é o app do Grupo 5 😀')
})

module.exports = router