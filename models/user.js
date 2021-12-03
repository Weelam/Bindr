const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
  }
  // username: {},
  // groups: {},
  // friends: {},
  // wantToMatch: {},
  // rejected: {},
  // notifications: {},
  // role: {},
  // courses: {},
  // program: {},
  // year: {},
  // bio: {},
});

// make a model using the User schema
const User = mongoose.model('User', UserSchema)
module.exports = { User }

