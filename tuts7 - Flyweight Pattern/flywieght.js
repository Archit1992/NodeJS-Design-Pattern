/**
 * Created by archi on 6/9/2017.
 */

var Task = function (data) {
    /*this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
    */
    this.flyweight = FlyWeightPattern.get(data.project, data.priority, data.user, data.completed);
    this.name = data.name;
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

var Flyweight = function (project, priority, user, completed) {
    this.project = project;
    this.priority = priority;
    this.user = user;
    this.completed = completed;
}

var FlyWeightPattern = function () {
    var flyweights = {}

    var get = function (project, priority, user, completed) {
        if(!flyweights[project + priority + user + completed]){
            flyweights[project + priority + user + completed] =
                new Flyweight(project, priority, user, completed)
        }
        return flyweights[project + priority + user + completed]
    };
    var getCount = function () {
        var count = 0;
        for (var f in flyweights) {
            count++
        }
        return count;
    };
    return {
        get : get,
        getCount : getCount,
    };
}();

var tasks = new TaskCollection();

var project = ['none', 'courses', 'training', 'projects'];
var priority = ['1', '2', '3', '4', '5'];
var user = ['Archit', 'Mohit', 'Manan', 'Parth'];
var completed = [true, false];

var intialMemory = process.memoryUsage().heapUsed;

// this for loop taking 2.8 mb of memory.
for(var i = 0 ; i < 1000000 ; i++){
    tasks.add({
        name : 'task'+i,
        project : project[Math.floor((Math.random() * 4))],
        priority : priority[Math.floor(Math.random() * 5)],
        user : user[Math.floor(Math.random() * 4)],
        completed : completed[Math.floor(Math.random() * 2)]
    })
}

var afterMemory = process.memoryUsage().heapUsed;

console.log("Memory usage : ", (afterMemory - intialMemory) / 1000000, " mb" );
console.log("Tasks : ", tasks.getCount());
console.log("Flyweights : ", FlyWeightPattern.getCount());