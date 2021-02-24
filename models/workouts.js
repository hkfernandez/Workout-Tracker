const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
	{
		day: { type: Date,
			default: new Date(new Date().setDate(new Date().getDate())) },
		exercises: Array,

	}
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

// day: new Date(new Date().setDate(new Date().getDate() - 4)),
// exercises: [
//   {
// 	type: "resistance",
// 	name: "Quad Press",
// 	duration: 30,
// 	weight: 300,
// 	reps: 10,
// 	sets: 4
