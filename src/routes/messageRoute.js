const messageController = require("../controllers/messageController");
const router = require("express").Router();

router.get("/", messageController.getMessage);

module.exports = router;
