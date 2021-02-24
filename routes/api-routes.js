const dotenv = require ('dotenv')
dotenv.config();
const Workout = require("../models/workouts.js");

module.exports = function(app) {

	app.get("/api/workouts", 
		(request, response) => {
			Workout.find()
			.then(
				allWorkouts => {
				//   console.log('WORKOUTS ROUTES HIT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', allWorkouts);
				response.json(allWorkouts);
				}
			)
			.catch(
				err => {
				// console.log('WORKOUTS ROUTES HIT WITH ERROR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
				response.json(err);
			}
			);
		}
	);

	app.put("/api/workouts/:id", 
		(request, response) => {
			let workoutId = request.params
			let newExercise = request.body
			console.log(workoutId);
			console.log(newExercise);
			Workout.findOneAndUpdate({_id: workoutId}, { $push: { exercises: newExercise} }, { new: true })
			.then(
				updatedWorkout => {
					response.json(updatedWorkout);
				}
			)
			.catch(
				err => {
					console.log('WORKOUTS ROUTES HIT WITH ERROR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
					response.json(err);
				}
			);
	  	}
	);
	
	// 	const res = await fetch("/api/workouts/" + id, {
	// 	method: "PUT",
	// 	headers: { "Content-Type": "application/json" },
	// 	body: JSON.stringify(data)
	// 	});

	// 	const json = await res.json();

	// 	return json;
	// },
	// async createWorkout(data = {}) {
	// 	const res = await fetch("/api/workouts", {
	// 	method: "POST",
	// 	body: JSON.stringify(data),
	// 	headers: { "Content-Type": "application/json" }
	// 	});

	// 	const json = await res.json();

	// 	return json;
	// },

	// async getWorkoutsInRange() {
	// 	const res = await fetch(`/api/workouts/range`);
	// 	const json = await res.json();

	// 	return json;
	// },
	// };
}
