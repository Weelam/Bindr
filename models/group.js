/* Student mongoose model */
const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  // username of the person
  author: {
      type: String,
      required: true,
      minlength: 1,
  }, 
  // their comment
  comment: {
    type: String,
    required: true,
    minlength: 1,
  },
  dateAdded: Date
})

const TaskSchema = new mongoose.Schema({
  // the id of the user that is responsible for this task
  users: Array,
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  desc: {
    type: String,
    required: true,
    minlength: 1,
  },
  completed: {
    type: Boolean,
    requied: true,
  },
  deadline: Date,
  comments: [CommentSchema]  
})

const DiscussionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
  },
  
  description: {
    type: String,
    minlength: 1,
  },

  creationDate: {
    type: Date,
    required: true
  },
  // list of comments inside this discussion
  comments: [CommentSchema] 
})

const GroupSchema = new mongoose.Schema({
    projectName: {
      type: String,
      required: true,
      minlength: 1,
    },
    members: Array, // array of user id's
    tasks: [TaskSchema],
    discussions: [DiscussionSchema],
  });

const Group = mongoose.model("Group", GroupSchema);
module.exports = { Group };
