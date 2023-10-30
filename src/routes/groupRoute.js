const groupController = require("../controllers/groupController");
const router = require("express").Router();

router.get("/", groupController.getGroup);

module.exports = router;
