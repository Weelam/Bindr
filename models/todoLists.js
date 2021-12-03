/* Student mongoose model */
const mongoose = require("mongoose");

const ToDoLists = mongoose.model("ToDoLists", {
    task: {

    },
    complete: {

    }
});

// const ToDoLists = mongoose.model("ToDoLists", UserSchema);
module.exports = { ToDoLists };
