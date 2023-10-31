const messageController = require("../controllers/messageController");
const activityController = require("../controllers/activityController");
const router = require("express").Router();

router.get("/", messageController.getMessage);
router.get("/api/atividades", activityController.getActivity);
module.exports = router;
