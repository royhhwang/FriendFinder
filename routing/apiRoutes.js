var people = require("../app/data/frends.js");

module.exports = (function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(people);
    });

    app.post("/api/friends", function (req, res) {
        if (people.length < 10) {
            people.push(req.body);
            res.json(true);
        }
        else {
            res.json(false);
        }
    });
});