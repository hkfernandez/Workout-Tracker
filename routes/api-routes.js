const dotenv = require ('dotenv')
dotenv.config();

// db.connect (process.env.CONNECTIONSTRING, async function () {
// 	const db = client.db ()
// 	const results = await db.collections ( "workouts" )
// 	.find( { property: value } )
// 	.toArray()
// 	expressionUsingResult
// 	})



module.exports = function(app) {

	app.post("/submit", ({body}, res) => {
		User.create(body)
		  .then(dbUser => {
			res.json(dbUser);
		  })
		  .catch(err => {
			res.json(err);
		  });
	  });
	
	const API = {
	async getLastWorkout() {
		let res;
		try {
		res = await fetch("/api/workouts");
		} catch (err) {
		console.log(err)
		}
		const json = await res.json();

		return json[json.length - 1];
	},
	async addExercise(data) {
		const id = location.search.split("=")[1];

		const res = await fetch("/api/workouts/" + id, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data)
		});

		const json = await res.json();

		return json;
	},
	async createWorkout(data = {}) {
		const res = await fetch("/api/workouts", {
		method: "POST",
		body: JSON.stringify(data),
		headers: { "Content-Type": "application/json" }
		});

		const json = await res.json();

		return json;
	},

	async getWorkoutsInRange() {
		const res = await fetch(`/api/workouts/range`);
		const json = await res.json();

		return json;
	},
	};
}
