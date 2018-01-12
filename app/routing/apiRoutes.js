// Load data
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information

var friends = require("../data/friends.js")

// Routing

module.exports = function (app) {

    // API GET Requests
    // Below code handles when users "visit" a page.

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });


    // API POST Requests
    // User submits a form and submits data to the server.

    app.post("/api/friends", function (req, res) {

        console.log(req.body);

        // Loop through the friends
        // Says cannot read property length of undefined so had to change urlencode to true in sever.js to make work

        for (var i = 0; i < req.body.scores.length; i++) {
            var parsInt = parseInt(req.body.scores[i]);
            req.body.scores[i] = parsInt;
        }

        friends.push(req.body);

        // Create variables for compatible friends and diff

        var yourMatch = 0;
        var diff = 50;

        for (var i = 0; i < friends.length - 1; i++) {
            var totalDifference = 0;

       // Use the absolute value of the differences so there are no negative solutions     

            for (var j = 0; j < friends[i].scores.length; j++) {
                totalDifference += Math.abs(friends[i].scores[j] - req.body.scores[j]);
            }

            if (totalDifference < diff) {
                yourMatch = i;
                diff = totalDifference;
            }
        }

        res.send(friends[yourMatch]);
    });

};