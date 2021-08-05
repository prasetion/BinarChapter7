const router = require("express").Router();
const controllers = require("../controllers");

router.get("/", controllers.pages.home);
router.get("/game", controllers.pages.game);

module.exports = router;