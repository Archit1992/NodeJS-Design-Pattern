/**
 * Created by archi on 6/9/2017.
 */
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

var TaskService = function () {
    return{
        complete : function (task) {
            task.completed = true;
            console.log("Completing task...", task.name);
        },
        setCompleteDate : function (task) {
            task.completedDate = new Date();
            console.log(task.name ," completed on ", task.completedDate);
        },
        notifyCompletion : function(task,user){
            console.log("Notifying ", user, " of the completion of ", task);
        },
        save : function (task) {
            console.log("saving task ", task);
        }
    }
}();
var TaskServiceWrapper = function () {
    var completeAndNotify = function (myTask) {
        TaskService.complete(myTask);
        if(myTask.completed === true){
            TaskService.setCompleteDate(myTask);
            TaskService.notifyCompletion(myTask, myTask.user);
            TaskService.save(myTask);
        }
    }
    return {
        completeAndNotify : completeAndNotify
    }
}();

var myTask = new Task({
    name : "MyTask",
    priority : 1,
    project : "course",
    user: "Jon",
    completed : false
});

TaskServiceWrapper.completeAndNotify(myTask)