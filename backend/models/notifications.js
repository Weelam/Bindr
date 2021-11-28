/* Student mongoose model */
const mongoose = require("mongoose");

const Notifications = mongoose.model("Notifications", {
    notID: {

    },
    content: {

    }
});

// const Notifications = mongoose.model("Notifications", UserSchema);
module.exports = { Notifications };
