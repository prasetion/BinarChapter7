const router = require("express").Router();
const controllers = require("../controllers");

router.get("/login", controllers.login.getLogin);

module.exports = router;