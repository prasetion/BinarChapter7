module.exports = {
    home: (req, res) => {
        const title = "Hello World";
        const subTitle = "Welcome to the world!!!!!!!!!!";
        res.render("index", {
            title,
            subTitle
        });
    },
    game: (req, res) => {
        const title = "Hello World";
        const subTitle = "Welcome to the world!!!!!!!!!!";
        res.render("game", {
            title,
            subTitle
        });
    }
};