// Dependencies
// ==============================================
var express = require("express");
var path = require("path");
var db = require("./models");

// Sets up the Express App
// ==============================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
// ===============================================

// Basic route that sends the user first to the Landing Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "public/addProperties.html"));
});

// Starts the server to begin listening
// ===============================================
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
