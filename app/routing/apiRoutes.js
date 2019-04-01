// our apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = (app) => {
    // API GET Requests
    // Below code handles when users "visit" a page.
    //---------------------------------------------------------------------------

    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
    });

    app.post("/api/house", (req, res) => {
        let userInfo = req.body;
        let userChoices = userInfo.scores
    });

    app.post("/api/friends", (req, res) => {
        let userInfo = req.body;
        let userScores = userInfo.scores
        let matchName = '';
        let matchImage = '';
        let currentDifference = 10000;
        // This will loop through all of our firends
        for (var i = 0; i <friendsData.length; i++) {
            let diff = 0;
            // Loop through all of the user's choices and compare vs friend data
            for (var j = 0; j < userScores.length; j++) {
                diff += (Math.abs(friendsData[i].scores[j] - userScores[j]));
            };
            if (diff < currentDifference) {
				currentDifference = diff;
				matchName = friendsData[i].name;
				matchImage = friendsData[i].photo;
            }

        }

        friendsData.push(userInfo);
        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
    });

};


