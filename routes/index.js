const express = require("express");
const router = express.Router();

const pageRouter = require("./page");
const usersRouter = require("./users");
const scoresRouter = require("./scores");
const loginRouter = require("./login");

router.use(pageRouter);
router.use(usersRouter);
router.use(scoresRouter);
router.use(loginRouter);

module.exports = router;