// page
module.exports = {
  index: (req, res) => {
    const title = "Home Page";
    const subTitle = "";
    res.render("index", {
      title,
      subTitle,
    });
  },
  login: (req, res) => {
    const title = "Login Page";
    const message = "";
    res.render("login", {
      title,
      message,
    });
  },
  signUp: (req, res) => {
    const title = "Sign up Page";
    const subTitle = "";
    res.render("signup", {
      title,
      subTitle,
    });
  },
  game: (req, res) => {
    const title = "Game Page";
    const subTitle = "";
    res.render("game", {
      title,
      subTitle,
    });
  },
};
