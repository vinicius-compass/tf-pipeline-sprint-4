const jokeModel = require("../models/jokeModel");

const getJoke = async (req, res) => {
    try {
        const joke = await jokeModel.getJoke();
        res.status(200).json(joke);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getJoke,
};
