/* Student mongoose model */
const mongoose = require("mongoose");

const Posts = mongoose.model("Posts", {
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

// const Posts = mongoose.model("Posts", UserSchema);
module.exports = { Posts };
