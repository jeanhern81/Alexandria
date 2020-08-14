// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes - Need to deteremine what routes we'll be adding
// =============================================================
// require("")(app);
// require("")(app);
// require("")(app);
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function () {
//   app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
//   });
// });
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
