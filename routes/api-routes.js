const dotenv = require ('dotenv')
dotenv.config();
const Workout = require("../models/workouts.js");

module.exports = function(app) {

	app.get("/api/workouts", 
		(request, response) => {
			Workout.find({})
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

	app.post("/api/workouts", 
		({body}, response) => {
			//let workoutData = request.body
			console.log("console log of {body} in api/workouts routes = ", body);
			Workout.create(body)
			.then(
				newWorkout => {
				  console.log('WORKOUTS ROUTES HIT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
				console.log(newWorkout);
				response.json(newWorkout);
				}
			)
			.catch(
				err => {
				console.log('WORKOUTS ROUTES HIT WITH ERROR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
					console.log(err);
				response.json(err);
			}
			);
		}
	);

	
	app.get("/api/workouts/range", 
		(request, response) => {
			Workout.find()
			.then(
				allWorkouts => {
					let lastSevenWorkouts = allWorkouts.splice(allWorkouts.length-7, 7);
					console.log('LAST SEVEN WORKOUTS',lastSevenWorkouts);
				response.json(lastSevenWorkouts);
				}
			)
			.catch( err => { response.json(err); } );
		}
	);

	app.put("/api/workouts/:id", 
		(request, response) => {
			let workoutId = request.params.id
			let newExercise = request.body
			console.log('PARAMS')
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
