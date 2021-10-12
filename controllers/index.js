const pages = require("./pageController");
const dashboard = require("./dashboardController");
const auth = require("./authController");
const games = require("./gamesController");
const roomHistory = require("./roomHistoryController");
const roomList = require("./roomListController");
const api = require("./apiController");

module.exports = {
  pages,
  auth,
  dashboard,
  auth,
  games,
  roomHistory,
  roomList,
  api,
};
