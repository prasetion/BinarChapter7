const express = require("express");
const router = express.Router();

const controller = require("../controllers");

// page no auth
router.get("/", controller.pages.index);
router.get("/login", controller.pages.login);

// login and regis with auth
router.post("/login", controller.auth.login);
router.post("/register", controller.auth.register);

module.exports = router;
