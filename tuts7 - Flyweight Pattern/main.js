/**
 * Created by archi on 6/9/2017.
 */
var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

var TaskCollection = function () {
    var task = {};
    var count = 0;
    var add = function (data) {
        task [data.name ] = new Task(data);
        count++;
    };
    var get = function (name) {
        return task[name];
    };
    var getCount = function () {
        return count;
    };
    return {
        add : add,
        get : get,
        getCount : getCount,
    };
};

var tasks = new TaskCollection();

var projects = ['none', 'courses', 'training', 'projects'];
var priorities = ['1', '2', '3', '4', '5'];
var users = ['Archit', 'Mohit', 'Manan', 'Parth'];
var completed = [true, false];

var intialMemory = process.memoryUsage().heapUsed;

// this for loop taking 2.8 mb of memory.
for(var i = 0 ; i <= 10000 ; i++){
    tasks.add({
        name : 'task'+i,
        projects : projects[Math.floor((Math.random() * 4))],
        priorities : priorities[Math.floor(Math.random() * 5)],
        users : users[Math.floor(Math.random() * 4)],
        completed : completed[Math.floor(Math.random() * 2)]
    })
}

var afterMemory = process.memoryUsage().heapUsed;

console.log("Memory usage : ", (afterMemory - intialMemory) / 1000000, " mb" );
