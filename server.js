// Dependencies
// ==============================================
var express = require("express");
var path = require("path");
// var db = require("./models");



// Sets up the Express App
// ==============================================
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
// ===============================================
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/properties", function (req, res) {
  res.sendFile(path.join(__dirname, "public/properties.html"));
});
app.post("/api/newProperty", function (req, res) {
  // this route takes in the post request coming from the add Property Modal
  var property = req.body;
  // sends the incoming data into the property model
  db.Property.create({
    address: property.address,
    city: property.city,
    state: property.state,
    zip: property.zip,
    mortgage: property.mortgage,
    purchasePrice: property.purchasePrice,
    rent: property.rent




  })
  res.status(204).end();

})

app.get("/api/", function (req, res) {
  db.Property.findAll({}).then(function (data) {
    console.log(data);
    res.json(data);
  })
});


app.post("/api/newProperty", function (req, res) {
  // this route takes in the post request coming from the add Property Modal
  var property = req.body;
  // sends the incoming data into the property model
  db.Property.create({
    address: property.address,
    city: property.city,
    state: property.state,
    zip: property.zip,
    mortgage: property.mortgage,
    purchasePrice: property.purchasePrice,
    rent: property.rent




  })
  res.status(204).end();

})

app.get("/api/", function (req, res) {
  db.Property.findAll({}).then(function (data) {
    console.log(data);
    res.json(data);
  })
});


app.post("/api/newProperty", function (req, res) {
  // this route takes in the post request coming from the add Property Modal
  var property = req.body;
  // sends the incoming data into the property model
  db.Property.create({
    address: property.address,
    city: property.city,
    state: property.state,
    zip: property.zip,
    mortgage: property.mortgage,
    purchasePrice: property.purchasePrice,
    rent: property.rent




  })
  res.status(204).end();

})
app.delete("/api/:id", function (req, res) {
  // this route deletes the property based on the property Id
  db.Property.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    console.log("successfully deleted")
  })
})
app.put("/api/properties", function (req, res) {
  var property = req.body
  console.log(property)
  db.Property.update(
    property,
    {
      where: {
        id: property.id
      }
    }).then(function (property) {
      res.json(property);
    });
});


// Starts the server to begin listening
// ===============================================

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
