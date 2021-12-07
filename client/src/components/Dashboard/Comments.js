import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { sortByDate } from "../../actions/user";

const Comments = ({ comments, task, handleAddComment }) => {
  const [newComment, setNewComment] = useState("");
  console.log(task.name, comments);

	// sort the comments
	const sortComment = (sortBy, comments) => {
		if (sortBy === "latest") { 
			return comments.sort((a, b) => sortByDate(a, b))
		}
	}
  return (
    <div className="comments-root">
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <Button onClick={() => handleAddComment(newComment)}>Add Comment</Button>
      {sortComment("latest", comments).map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
