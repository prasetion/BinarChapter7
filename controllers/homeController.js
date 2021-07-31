module.exports = {
    show: (req, res) => {
        const title = "Hello World";
        const subTitle = "Welcome to the world!!!!!!!!!!";
        res.render("index", {
            title,
            subTitle
        });
    }
};