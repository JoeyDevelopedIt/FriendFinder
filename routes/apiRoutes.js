// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var matches = require("../data/matchesData.js");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/matches", function(req, res) {
    res.json(matches);
  });




  app.post("/api/matches", function(req, res) {

    var bestComp = {
        name: "",
        photo: "",
        mdifference: 1000
    }
  });

  // Nested four loop that would compare the values selcted and make the match

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    matchesData.length = [];


    res.json({ ok: true });
  });
};
