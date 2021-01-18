1) npm init -y

2) in package.json:
	// CHANGE
	"main": "server.js",
	// SCRIPTS
	"start": "node server.js",
    "start:dev": "nodemon server.js"

	- npm i body-parser dotenv express mysql
	- npm i nodemon -D

3) add server.js with the following:

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

5) add routes folder with:
	- controller.js -> html and api routes
	- orm.js -> talks to db
	- connection -> inits connection to db

SETUP REACT

6) create-react-app client

7) client package.json
	-   "proxy": "http://localhost:3333", or to whatever proxy is in server.js

8) npm i on client:  npm i redux react-redux

9) delete App.js, app.css, all the testing shit. Only file should be index.js with:

			import React from 'react';
			import ReactDOM from 'react-dom';

			// CSS
			import './constants/reset.css';
			import './constants/index.css';

			// Screen
			import MainScreen from "./screens/MainScreen/MainScreen";

			// Redux
			import { Provider } from 'react-redux';
			import { createStore } from 'redux';
			import Reducer from './Store/Reducers/Reducer';

			const store = createStore(Reducer);

			const App = () => (
				<Provider store={store}>
				<MainScreen />
				</Provider>
			);

			ReactDOM.render(<App />, document.getElementById('root'));

