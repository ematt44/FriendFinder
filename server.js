// NMP init
// MPM install for express, body-parser and path

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Set up the Express App
// Use process.evn.PORT or 3000

var app = express();
var PORT = process.env.PORT || 3000;

// Set up the express app to handle body parsing
// Make sure to set urlencoded to true 

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Point the server to the different route files
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// The below code effectively "starts" our server

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  