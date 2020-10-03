// Dependencies
// ==============================================
var express = require("express");
var path = require("path");
var axios = require('axios')
var stringify = require('json-stringify-safe');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require("passport")
const cookieParser = require("cookie-parser");
require('dotenv').config();
// var db = require("./models");



// Sets up the Express App
// ==============================================
//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(cookieParser());


// routes for auth
require('./userModel/User.js');
require('./config/passport');
app.use(require('./routes'));

// mongo connection
mongoose.connect('mongodb://localhost/passport-tutorial');
mongoose.set('debug', true);
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

app.get("/properties-details", function (req, res) {
  res.sendFile(path.join(__dirname, "public/properties-details.html"));
});

app.get("/api/", function (req, res) {
  db.Property.findAll({}).then(function (data) {
    console.log(data);
    res.json(data);
  })
});
app.get("/api/:id", function (req, res) {
  var id = req.params.id
  db.Property.findOne({
    where: {
      id: id

    }
  }).then((data) => {
    res.json(data)
  });
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




  }).catch(function (err) {
    // Whenever a validation or flag fails, an error is thrown
    // We can "catch" the error to prevent it from being "thrown", which could crash our node app
    res.json(err);

  })
});
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
// zillow route
app.get("/zillowCall/", async (req, res) => {
  console.log(req.query)
  var locationArray = req.query.locationArray


  // // console.log(locationArray)

  axios({
    "method": "GET",
    "url": "https://zillow-com.p.rapidapi.com/search/address",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "zillow-com.p.rapidapi.com",
      "x-rapidapi-key": process.env.Zill_KEY,
      "useQueryString": true
    }, "params": {
      "address": locationArray[0],
      "citystatezip": locationArray[1] + " " + locationArray[2],
      // "address":"2114 Bigelow Ave",
      // "citystatezip":"Seattle WA 98109"
    }
  })
    .then((data) => {
      console.log(data)
      res.send(stringify(data))
    })

})




// Starts the server to begin listening
// ===============================================

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
