import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./styles/discussionStyle.css";
import { defaultModel } from "../../actions/defaultModel";
import Comments from "./Comments";
import { Button, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  modalItem: {
    display: "flex",
    alignItems: "center",
    // height: "10px",
    "& input": {
      width: "20px",
      height: "20px",
    },
  },
  button: (props) => ({
    width: "100%",
    color: "white",
    // flex-grow: 1;
    margin: "20px 0",
    background: props.color,
    transition: "filter 300ms",
    "&:hover": {
      background: props.color,
      filter: "brightness(1.2)",
    },
  }),
  title: {
    fontWeight: "bold",
  },
  desc: {
    wordBreak: "break-word",
  },
});

const Discussion = ({ discussion, currentUser }) => {
  const classes = useStyles({ color: "#52b788" });
  const [useless, setUseless] = useState();
  const [users, setUsers] = useState([defaultModel]);
  const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState("");

  const handleAddComment = (newCommentContent) => {
    if (!newCommentContent) {
      alert("Comment can't be empty");
      return;
    }
    const newComment = {
      author: currentUser,
      comment: newCommentContent,
      dateAdded: Date.now(),
    };
    const newTask = {
      ...discussion,
      comments: [...discussion.comments, newComment],
    };
    console.log(newTask);
  };

  return (
    <>
      <Accordion className="discussion-root">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="discussion-summary"
        >
          <p className={classes.title}>{discussion["title"]}</p>
          <span className="discussion-date">
            Date posted: {discussion["dateAdded"]}
          </span>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <div className="discussion-details">
            <p className={classes.title}>{discussion["title"]}</p>
          </div>
          <div className="discussion-details">
            <p className={classes.desc}>{discussion["desc"]}</p>
          </div>
          <Divider />
          <div className="discussion-Comments">
            <p className="tasks-commentTitle">Comments</p>
						<input value={newComment} onChange={(e) => setNewComment(e.target.value)} />
					<Button onClick={() => setComments(prev => [newComment, ...prev])}>Add Comment</Button>
            {comments.map((comment, i) => {
              return (
                <div key={i}>
                  <span className="discussion-span1">{currentUser}</span>
                  <span className="discussion-span2">{comment}</span>
                </div>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Discussion;
