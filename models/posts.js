/* Student mongoose model */
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    groupID: {
        // id of the group is from
    },
    poster: {
      // id of the user who posted  
    },
    content: {
        // content of post
    },
    datetime: {
        // date the post was created
    }
});

const Post = mongoose.model("Post", PostSchema);
module.exports = { Post };
