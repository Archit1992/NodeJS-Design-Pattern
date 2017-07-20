/**
 * Created by archi on 6/8/2017.
 */

var myRepo = require("./Repo");

// var myRepo = repo();

var taskHandler = function () {
    return {
        save : function () {
            myRepo.save("Hi from taskHandler");
        }
    }
}

module.exports = taskHandler();