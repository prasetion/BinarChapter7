module.exports = {
    allUsers: (req, res) => {
        res.render("scores", {
            title: "ini title",
            navigation: "scores"
        });
    }
};