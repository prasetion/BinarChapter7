module.exports = {
  index: (req, res) => {
    const title = "Hello World";
    const subTitle = "Welcome to the world!!!!!!!!!!";
    res.render("index", {
      title,
      subTitle,
    });
  },
  login: (req, res) => {
    const title = "Hello World";
    const subTitle = "Welcome to the world!!!!!!!!!!";
    res.render("login", {
      title,
      subTitle,
    });
  },
  register: (req, res) => {
    const title = "Hello World";
    const subTitle = "Welcome to the world!!!!!!!!!!";
    res.render("register", {
      title,
      subTitle,
    });
  },
  game: (req, res) => {
    const title = "Hello World";
    const subTitle = "Welcome to the world!!!!!!!!!!";
    res.render("game", {
      title,
      subTitle,
    });
  },
};
