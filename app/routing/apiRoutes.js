// ==============================================================
// Load Data - sources that hold arrays of data
var friends = require("../data/friends");

// ==============================================================
// Routing
module.exports = function(app){
	
	//API GET requests - used to display JSON of all possible friends
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	//API POST requests - when user submits the survey results and used for compatibility 
	app.post("/api/friends", function(req, res){
		res.json(friends);
	});

	console.log("Friends: " + friends);
}