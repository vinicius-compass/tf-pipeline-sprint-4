const taskController = require("../controllers/taskController");
const router = require("express").Router();

router.get("/", taskController.getTask);

module.exports = router;
