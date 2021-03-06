const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const mongoose = require('mongoose');

const logger = require("morgan");
app.use(logger("dev"));

const PORT = process.env.PORT || 3000

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/workoutdb',
	{
	  useNewUrlParser: true,
	  useUnifiedTopology: true,
	  useCreateIndex: true,
	  useFindAndModify: false
	}
  );

app.listen(PORT, () => {
  console.log("App running on port 3000! or " + PORT);
});
