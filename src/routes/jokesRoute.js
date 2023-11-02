const router = require("express").Router();
const jokesController = require("../controllers/jokesController");

router.get('/', jokesController.getRandomJoke);

module.exports = router;
