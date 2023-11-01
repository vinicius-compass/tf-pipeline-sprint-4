const axios = require('axios');

const {formatAccessibility} = require('../utils/formatAccessibilityUtils');

const RandomActivity = require('../models/RandomActivityModel');

const getRandomActivity = (req, res) => {
    axios.get('https://www.boredapi.com/api/activity')
    .then(response => {
        const randomActivityData = response.data;

        const formattedRandomActivityData = formatRandomActivityData(randomActivityData);

        console.log(formattedRandomActivityData);

        const randomActivity = new RandomActivity(formattedRandomActivityData);

        res.status(200).json(randomActivity);
    })
    .catch(error => {
        res.status(500).send('Erro ao obter uma atividade.');
      });
}

module.exports = {getRandomActivity};

function formatRandomActivityData(randomActivityData) {
    randomActivityData.accessibility = formatAccessibility(randomActivityData.accessibility);

    return randomActivityData;
}