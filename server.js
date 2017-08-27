var express = require("express");
var expressHandlebars = require("express-handlebars");
var path = require("path");


var app = express();

app.engine(".handlebars", expressHandlebars({extname: ".handlebars", defaultLayout: "layout"}));

app.set("view engine", ".handlebars");

app.use(express.static(path.join(__dirname, "/public")));


function homeHandler(request, response) {
	response.render("home", {title: "Seaview Homepage"});
};

function pricesHandler(request, response) {
	response.render("prices", {title: "Seaview Prices"});
};

app.get("/", homeHandler);
app.get("/prices", pricesHandler);

app.listen(8080);

console.log("Hello cmd");