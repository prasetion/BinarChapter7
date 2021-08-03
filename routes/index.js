const express = require("express");
const router = express.Router();

const homeRouter = require("./home");
const usersRouter = require("./users");
const scoresRouter = require("./scores");
const loginRouter = require("./login");

router.use(homeRouter);
router.use(usersRouter);
router.use(scoresRouter);
router.use(loginRouter);

module.exports = router;