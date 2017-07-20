/**
 * Created by archi on 6/8/2017.
 */

var repo = function () {
    return {
        get : function(id) {
            console.log("Getting task ... ",id);
            return{
                name : " new task from db"
            }
        },
        save : function(task){
            console.log("Savings data ", task.name, " to the db");
        }
    }
}

module.exports = repo();