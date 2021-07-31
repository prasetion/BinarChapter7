const router = require("express").Router();
const controllers = require("../controllers");

router.get("/scores", controllers.scores.allUsers);

module.exports = router;