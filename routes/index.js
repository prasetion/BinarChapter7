const express = require("express");
const router = express.Router();

const controller = require("../controllers");
const {
  restrict,
  redirect,
  tokenCheck,
  loginToken,
  adminOnly,
} = require("../middleware");

// page no auth
router.get("/", controller.pages.index);
router.get("/login", controller.pages.login);
router.get("/signup", controller.pages.signUp);

// login and regis
router.post("/login", controller.auth.login);
router.post("/signup", controller.auth.signup);
router.post("/register", controller.auth.register);

// protected page
router.get("/dashboard", redirect, controller.dashboard.index);

router.get("/room-list", redirect, controller.roomList.index);
router.get("/room/:room", redirect, controller.games.index);

// API Router
// Table Room
router.get("/api/v2/rooms", adminOnly, controller.api.all_room);
router.get("/api/v2/room/:room", adminOnly, controller.api.room);

// Table User
router.get("/api/v2/users", adminOnly, controller.api.all_user);
router.get("/api/v2/user/:id", adminOnly, controller.api.user);
router.put("/api/v2/user/edit/:id", adminOnly, controller.api.update_user);
router.delete("/api/v2/user/delete/:id", adminOnly, controller.api.delete_user);

// Games
router.post("/api/v2/auth/register", controller.api.register);
router.get("/api/v2/whoami", restrict, controller.api.whoami);
router.post("/api/v2/auth/login", loginToken, controller.api.login);
router.post("/api/v2/room/create", tokenCheck, controller.api.create_room);
router.post("/api/v2/room/:room/join", tokenCheck, controller.api.join);
router.post("/api/v2/room/:room/play", tokenCheck, controller.api.play);
router.get("/api/v2/room/:room/result", tokenCheck, controller.api.result);

module.exports = router;
