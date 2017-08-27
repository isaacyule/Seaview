var express = require("express");
var expressHandlebars = require("express-handlebars");
var path = require("path");


var app = express();

app.engine(".handlebars", expressHandlebars({extname: ".handlebars", defaultLayout: "layout"}));

app.set("view engine", ".handlebars");

app.use(express.static(path.join(__dirname, "/public")));

function homeHandler(req, res) {
	response.render("home", {title: "Seaview Homepage"});
}

app.get("/", homeHandler);

app.listen(8080);

console.log("Hello cmd");