// style 1 : creating an object
var task1 = {};

// style 2 : creating an object
var task2 = Object.create(Object.prototype);

// style 3 : creating an object.
var task3 = new Object();

// adding properties(key, value)
task1.title = "My task 1";
task1.description = " My task description 1 ";

// adding properties (key, value)
task2.title = "My task 2";
task2.description = " My task description 2 ";

task3={
    // adding properties (key, value)
    title : "My task 3",
    description : " My task description 3",
    get : function () {
        /*
         * this keyword works only for task 1 object in this scope only.
         */
        return this.title + " " + this.description;
    }
}

// creating function for the task 1 object.
task1.get = function(){
    /*
    * this keyword works only for task 1 object in this scope only.
    */
    return this.title + " " + this.description;
}

//  creating function for the task 2 object.
task2.get = function () {
    /*
     * this keyword works only for task 2 object in this scope only.
     */
    return this.title + " " + this.description;
}

console.log(task1.title);
console.log(task2.title);
console.log(task3.title);

console.log(task1.get());
console.log(task2.get());
console.log(task3.get());
