
var path = require("path");
var people = require("../app/data/frends.js");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get('*', function (req, res) {
        res.redirect("/");
    });
}

