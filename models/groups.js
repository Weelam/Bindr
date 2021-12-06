/* Student mongoose model */
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  task: {
    type: String,
    required: true,
    minlength: 1,
  },
  completed: {
    type: Boolean,
    requied: true,
  }
  
})

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
  }
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
    projectname: {
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
