/**
 * Created by archi on 6/8/2017.
 */

var repo = function () {
    var called = 0;

    // one method called save.
    var save = function (task) {
        called++;
        console.log("Saving ", task, " Called ", called, " times");
    }
    console.log("newing up task repo");
    return{
        save : save
    }
}
module.exports = repo();