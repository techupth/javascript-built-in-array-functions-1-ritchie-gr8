const todos = [
	{ topic: "Doing pre-work", completed: true },
	{ topic: "Workout", completed: false },
	{ topic: "Playing computer games", completed: true },
	{ topic: "Relax", completed: false },
	{ topic: "Clean the room", completed: true },
];

function getTodoTopics(todos) {
	// Start coding here
	const result = todos.reduce((prev, cur) => {
		prev.push(cur.topic)
		return prev
	}, [])

	console.log(result)
}

getTodoTopics(todos);

/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/
