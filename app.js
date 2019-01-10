var express = require("express"),
	app		= express();

// CONFIG
app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));


// ROUTES
app.get("/", function(req, res){
	res.render("color game");
});

app.listen(process.env.PORT || 3000, function(){
	console.log("Server for Color Game started!");
});