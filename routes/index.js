const express = require("express");
const router = express.Router();

const homeRouter = require("./home");
const usersRouter = require("./users");
const scoresRouter = require("./scores");

router.use(homeRouter);
router.use(usersRouter);
router.use(scoresRouter);

module.exports = router;