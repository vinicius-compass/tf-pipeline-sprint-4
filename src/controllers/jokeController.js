const jokeModel = require("../models/jokeModel");
const ApiError = require("../utils/apiError");

const getJoke = async (req, res, next) => {
    try {
        const joke = await jokeModel.getJoke();
        return res.status(200).json(joke);
    } catch (err) {
        return next(new ApiError("Erro na API remota!", 500));
    }
};

module.exports = {
    getJoke,
};
