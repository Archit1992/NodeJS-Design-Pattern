/**
 * Created by archi on 6/8/2017.
 */

var taskHandler = require('./taskHandler')
var myrepo = require('./Repo');     // print : newing up task.

// var myrepo = repo();


myrepo.save("from main");
myrepo.save("from main");
myrepo.save("from main");
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();

