/* Student mongoose model */
const mongoose = require("mongoose");

const ToDoListSchema = new mongoose.Schema({
    task: {

    },
    complete: {

    }
});

const ToDoList = mongoose.model("ToDoList", ToDoListSchema);
module.exports = { ToDoList };
