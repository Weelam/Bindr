/* Student mongoose model */
const mongoose = require("mongoose");

const User = mongoose.model("User", {
  userID: {
    type: Int16Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
    // default: 1
  },

  profileImg: {
    type: String,
    default: "",
  },
  username: {},
  groups: {},
  friends: {},
  wantToMatch: {},
  rejected: {},
  notifications: {},
  role: {},
  courses: {},
  program: {},
  year: {},
  bio: {},
});

// const User = mongoose.model("User", UserSchema);
module.exports = { User };
