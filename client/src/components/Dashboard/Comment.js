import React, { useState, useEffect } from "react";
import "./styles/commentStyle.css";
const Comment = ({ comment }) => {
  return (
    <div className="comment-root">
      <div className="comment-author">
				<p>{comment.author}</p>
			</div>
      <div className="comment-content">
			<p>{comment.comment}</p>
			</div>
    </div>
  );
};

export default Comment;
