const activityController = require("../controllers/activityController");
const router = require("express").Router();

router.get("/", activityController.getActivity);

module.exports = router;
