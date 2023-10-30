const jokeController = require("../controllers/jokeController");
const router = require("express").Router();

router.get("/", jokeController.getJoke);

module.exports = router;
