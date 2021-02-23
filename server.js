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

await mongoose.connect(CONNECTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
// db.on("error", error => {
//   console.log("Database Error:", error);
// });

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
