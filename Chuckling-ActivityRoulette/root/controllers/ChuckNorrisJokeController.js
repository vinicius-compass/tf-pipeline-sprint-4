const axios = require('axios');

const { formatDates } = require('../utils/formatDateUtils');
const { replaceChuckNorrisToUppercase } = require('../utils/replaceText');

const ChuckNorrisJoke = require('../models/ChuckNorrisJokeModel');

const getChuckNorrisJoke = (req, res) => {
  axios.get('https://api.chucknorris.io/jokes/random')
    .then(response => {
      const chuckNorrisData = response.data;

      const formattedChuckNorrisData = formatChuckNorrisData(chuckNorrisData);

      console.log(formattedChuckNorrisData);

      const chuckNorrisJoke = new ChuckNorrisJoke(formattedChuckNorrisData);

      res.status(200).json(chuckNorrisJoke);
    })
    .catch(error => {
      res.status(500).send('Erro ao obter piada do Chuck Norris.');
    });
};

module.exports = { getChuckNorrisJoke };

function formatChuckNorrisData(chuckNorrisData) {
  chuckNorrisData.created_at = formatDates(chuckNorrisData.created_at);
  chuckNorrisData.updated_at = formatDates(chuckNorrisData.updated_at);
  chuckNorrisData.value = replaceChuckNorrisToUppercase(chuckNorrisData.value);

  return chuckNorrisData;
}