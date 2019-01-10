var express = require("express"),
	app		= express();

// CONFIG
app.set("view engine", "ejs");

app.use(express.static("public"));


app.get("/", function(req, res){
	res.render("color game");
});

app.listen(process.env.PORT || 3000, function(){
	console.log("Server for Color Game started!");
});