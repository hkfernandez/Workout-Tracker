const express = require("express");
const mongoose = require('mongoose');

const logger = require("morgan");

const PORT = process.env.PORT || 3000

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workoutdb";
// const collections = ["workouts"];

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/"+databaseUrl, { useNewUrlParser: true });
mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/'+databaseUrl,
	{
	  useNewUrlParser: true,
	  useUnifiedTopology: true,
	  useCreateIndex: true,
	  useFindAndModify: false
	}
  );
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log('mongoose connection working');
// });

app.listen(PORT, () => {
  console.log("App running on port 3000! or " + PORT);
});
