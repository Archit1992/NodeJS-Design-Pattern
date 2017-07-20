
var Task = require('./task');
var Repo = require('./taskRepository');

// creating object of Task and passing JSON value from Repo and pass to the Task constructor.
var task1 =  new Task(Repo.get(1));

// creating constructor and passing json object.
var task2 =  new Task({ name : "create a demo for modules"});
var task3 =  new Task({ name : "create a demo for singletons"});
var task4 =  new Task({ name : "create a demo for prototypes"});

// calling methods of Task object.
console.info("\n--------/calling object methods------------------------")
task1.complete();
task2.save();
task3.save();
task4.save();

// printing all the objects.
console.info("\n--------/printing all the objects------------------------")
console.log(task1);
console.log(task2);
console.log(task3);
console.log(task4);