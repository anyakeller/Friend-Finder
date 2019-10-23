// I STOLE THIS CODE FROM THE SOLVED HOT RESTAURUANT OK?

var express = require("express");
var app = express();

// set port
var PORT = process.env.PORT || 8080;

// use express
app.userAgente(express.urlencoded({ extended: true }));
app.use(express.json());

// use the routes 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
