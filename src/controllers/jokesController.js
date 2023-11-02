const jokes = require("../models/jokesModel");

const getRandomJoke = async (req, res) => {
    try {
        const randomJoke = await jokes.getRandomJoke()

        // Definindo os headers para que o navegador entenda que é um JSON
        res.setHeader('Content-Type', 'application/json');

        res.status(200).send(randomJoke);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getRandomJoke,
};
