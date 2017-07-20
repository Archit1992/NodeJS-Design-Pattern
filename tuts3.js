/**
 * Created by archi on 6/8/2017.
 */
var Task  = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log("Completing task   ...", this.name)
    this.completed = true;
}
Task.prototype.save = function () {
    console.log("Savings an object ...", this.name)
}

var task1 =  new Task("create a demo for constructors");
var task2 =  new Task("create a demo for modules");
var task3 =  new Task("create a demo for singletons");
var task4 =  new Task("create a demo for prototypes");

console.log(task1);
console.log(task2);
console.log(task3);
console.log(task4);

task1.complete();
task2.save();
task3.save();
task4.save();

