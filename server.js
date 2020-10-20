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
const xml2js = require('xml2js');
const auth = require('./routes/auth');

require('dotenv').config();
// var db = require("./models");



// Sets up the Express App
// ==============================================
//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;
var app = express();
var PORT = process.env.PORT || 8080;

const { response } = require("express");


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
require('./userModel/property.js');
const Property = mongoose.model('Property');
require('./config/passport');
app.use(require('./routes'));

// mongo connection
//mongoose.connect('mongodb://localhost/alexandria');


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/alexandria',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    
  }
);
mongoose.set('debug', true);

// Routes
// ===============================================
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/properties", auth.required, function (req, res) {
  res.sendFile(path.join(__dirname, "public/properties.html"));
});

app.post("/api/newProperty", auth.required, function (req, res) {
  // this route takes in the post request coming from the add Property Modal
  var property = req.body;

  var newProperty = new Property({
    user_id: property.user_id,
    address: property.address,
    city: property.city,
    state: property.state,
    zip: property.zip,
    expenses: property.expenses,
    purchasePrice: property.purchasePrice,
    rent: property.rent
  })
  newProperty.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Document inserted succussfully!");
  });
  res.status(204).end();

})






app.get("/properties-details", function (req, res) {
  res.sendFile(path.join(__dirname, "public/properties-details.html"));
});

app.post("/api/", function (req, res) {
  var userId = JSON.parse(req.body.user_Id)
  console.log(req.body.user_Id)
  Property.find({
    user_id: userId
  }).then((data) => {
    console.log(data);
    res.json(data);
  })
});

app.get("/api/:id", function (req, res) {
  var id = req.params.id
  console.log(req)
  Property.findOne({

    _id: id


  }).then((data) => {
    res.json(data)
  });
});




app.delete("/api/:id", auth.required, function (req, res) {
  // this route deletes the property based on the property Id
  Property.deleteOne(
    {
      _id: req.params.id
    }
  ).then(() => {
    console.log("successfully deleted")
  })
})

app.put("/api/properties", function (req, res) {
  var property = req.body
  console.log(property._id)
  Property.findByIdAndUpdate(


    { _id: property._id }

    , {
      $set: { ...property }
    }

  ).then(function (property) {
    res.json(property);
  });
});

// zillow route

app.get("/zillowCall/", async (req, res) => {
  console.log(req.query);
  var locationArray = req.query.locationArray;
  // let address = "3128 MULBERRY STREET";
  // let citystate = "RIVERSIDE CA";
  let address = locationArray[0];
  let citystate = locationArray[1] + " " + locationArray[2];

  axios({
    "method": "GET",
    "url": `http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${process.env.Zill_KEY}&address=${address}&citystatezip=${citystate}&rentzestimate=true`,

    // "headers": {
    //   "content-type": "application/octet-stream",
    //   // "x-rapidapi-host": "zillow-com.p.rapidapi.com",
    //   "x-rapidapi-key": process.env.Zill_KEY,
    //   "useQueryString": true
    // },
    //  params: {
    //   rentzestimate: true
    // }
  })
    .then((api) => {
      console.log(api.data)
      xml2js.parseString(api.data, (err, result) => {
        if (err) { throw err };
        const json = JSON.stringify(result["SearchResults:searchresults"].response[0].results[0], null, 4);
        console.log("The Zillow JSON is: " + json);
        // res.json(stringify(result["SearchResults:searchresults"])) ;
        res.send(json);
      })
      // console.log(data)
      // res.send(stringify(result.data))
    }).catch(function (error) {
      console.log(error);
    });

})


// Starts the server to begin listening
// ===============================================


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

