const dotenv = require('dotenv')
dotenv.config();
const path = require ('path')
const Workout = require("../models/workouts.js");

module.exports = function (app) {

	app.get("/exercise",
		(request, response) => {
			response.sendFile(path.join(__dirname, "../public/exercise.html"));
		}

	);

	app.get("/stats",
		(request, response) => {
			response.sendFile(path.join(__dirname, "../public/stats.html"));
		}
	);

	app.get("/",
		(request, response) => {
			response.sendFile(path.join(__dirname, "../public/index.html"));
		}
	);
}
