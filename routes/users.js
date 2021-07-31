const router = require("express").Router();
const controllers = require("../controllers");

router.get("/users", controllers.users.allUsers);

module.exports = router;