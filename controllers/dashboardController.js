// dashboard

const {
  User_game,
  User_game_biodata,
  User_game_history,
} = require("../models");

module.exports = {
  index: async (req, res) => {
    const msg = req.query.msg;

    if (req.query.user == "admin") {
      await User_game.findAll({
        order: [["id", "ASC"]],
      }).then((user) =>
        res.status(200).render("dashboard", {
          title: "Dashboard Page",
          user,
          msg,
        })
      );
    } else if (req.query.user != "admin") {
      console.log("bukan admin");
      res.redirect("/login");
    }
  },
};
