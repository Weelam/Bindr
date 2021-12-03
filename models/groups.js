/* Student mongoose model */
const mongoose = require("mongoose");

const Groups = mongoose.model("Groups", {
    image: {

    },
    projectname: {

    },
    list: {
        // id from TodoList Objects
    }
});

// const Groups = mongoose.model("Groups", UserSchema);
module.exports = { Groups };
