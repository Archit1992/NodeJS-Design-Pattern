const events = require("events");

const em = new events.EventEmitter();

em.on("first", (data) => {
	switch(data.trim()){
		case 'developer':
			console.log("Archit and he is so cool developer !!! ")
			break;
		case 'testers':
			console.log("Archit code always executes properly!! ");
			break;
		default:
			console.log("invalid input!");
			break;
	}
	console.log("This input was : ", data);
})

em.emit("first", "developer");