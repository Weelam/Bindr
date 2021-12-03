/* Student mongoose model */
const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
    image: {},
    projectname: {},
    list: {
      // id from TodoList Objects
    },
  });

const Group = mongoose.model("", GroupSchema);
module.exports = { Group };
