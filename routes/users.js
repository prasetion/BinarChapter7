const router = require("express").Router();
const controllers = require("../controllers");

router.get("/users", controllers.users.allUsers);
router.get("/register", controllers.users.registerUser);

module.exports = router;