module.exports = {
    allUsers: (req, res) => {
        res.render("users", {
            title: "ini title",
            navigation: "users"
        });
    },
    userById: (req, res) => {
        res.render("users")
    }
};