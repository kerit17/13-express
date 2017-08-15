// ==============================================================
// Dependencies - include path package to get correct file path for HTML
var path = require("path");

// ==============================================================
// Routing
module.exports = function(app){

	//HTML GET request - when user visits a page; user is shown HTML page content
	app.get("/", function(req, res) {
		console.log("Hi");
		console.log(path.join(__dirname, "../public/home.html"));
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
	
	app.get("/survey", function(req, res) {
		console.log("Survey");
		console.log(path.join(__dirname, "../public/survey.html"));
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	//HTML USE route - leads to home.html when displaying the home page
	app.use(function(req, res){
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};