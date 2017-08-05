// ==============================================================
// Dependencies - npm packages needed for functionality

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

// ==============================================================
// Express Configuration - basic properties for express server

// Tells node that we are creating an "express" server
var app = express();

//Set an initial port - will be used in listener
var PORT = process.env.PORT || 8080;

//BodyParser to allow server to interpret data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text);
app.use(bodyParser.json({type: "application/vnd.api.json"}));

// ==============================================================
// Listener - start the server

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});