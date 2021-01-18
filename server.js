// Require and set up an instance of express
var express = require("express");
var app = express();
require("dotenv").config();

// Body parser middleware
var bodyParser = require("body-parser");

// process.env.PORT required for other parties like Heroku that may want to use their own port
var PORT = process.env.PORT || 3333;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// If running a test, set syncOptions.force to true
// clearing the `testdb`
var syncOptions = { force: false };
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Import routes and give the server access to them.
var routes = require("./routes/controller.js");
// Connect the routes to express
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
