/**
 * Created by archi on 7/7/2017.
 */

var Task = function(data){
    this.name = data.name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log("Completing task ... ", this.name);
    this.completed = true;
}
Task.prototype.save = function () {
    console.log("Saving task ... ", this.name);
}

module.exports = Task;
