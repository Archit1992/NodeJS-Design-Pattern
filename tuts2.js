/**
 * Created by archi on 7/7/2017.
 */

// creating task 3 object.

var task3={
    // adding properties (key, value)
    title : "My task 3",
    description : " My task description 3",

    /* ======== change it through property.
    get : function () {
        /!*
         * this keyword works only for task 1 object in this scope only.
         *!/
        return this.title + " " + this.description;
    }
    */
}

Object.defineProperty(task3, "get", {
    value: function () {
        return this.title + " - > " + this.description;
    },
    writable : false,        //  true : You cannot accidentally changed the value of this property.
    enumerable : true,      //  true : "get()" will shows up while you print the task3 properties.
    configurable : true,    //  false : You cannot redefine a property, false: You can redefine.

});

var urgentTask = Object.create(task3);      // Example of INHERITANCE.

Object.defineProperty(urgentTask, "get", {
    value: function () {
        return this.title + " - > " + " From urgent task.";
    },
    // I can override the value of this property with passing -> writable : true.
    writable : true,        //  true : You cannot accidentally changed the value of this property.
    enumerable : true,      //  true : "get()" will shows up while you print the task3 properties.
    configurable : true,    //  false : You cannot redefine a property, false: You can redefine.

});

console.log(urgentTask.get());