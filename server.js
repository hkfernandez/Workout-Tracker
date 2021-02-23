const express = require("express");
const mongoose = require('mongoose');

const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "exerciseDb";
const collections = ["workouts"];

require("./routes/api-routes.js")(app);

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('mongoose connection working');
});

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
