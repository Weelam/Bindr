import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createComment, getUserByID, updateTask } from "../../actions/user";
import "./styles/taskStyle.css";
import { defaultModel } from "../../actions/defaultModel";
import Comments from "./Comments";
import { Divider } from "@mui/material";

const Task = ({ selectedGroup, task, setTasks, currentUser }) => {
  const [useless, setUseless] = useState();
  const [users, setUsers] = useState([defaultModel]);
  useEffect(async () => {
    let x = [];
    for (const userID of task["users"]) {
      let data = await retrieveUsername(userID);
      x.push(data);
    }
    setUsers(x);
    // console.log(x);
  }, []);

  const handleCheck = (task, completed) => {
    // update task in back end, then the useEffect will be called after setTasks is
    const newTask = {
      ...task,
      completed: completed,
    };
    updateTask(selectedGroup, task, newTask, setTasks);
  };

  const handleAddComment = (newCommentContent) => {
    if (!newCommentContent) {
      alert("Comment can't be empty")
      return;
    }
    const newComment = {
      author: currentUser,
      comment: newCommentContent,
      dateAdded: Date.now()
    }
    const newTask = {
      ...task,
      comments: [... task.comments, newComment]
    }
    console.log(newTask)
    updateTask(selectedGroup, task, newTask, setTasks);

  }

  const retrieveUsername = async (userID) => {
    let user = await getUserByID(userID, setUseless);
    return user;
  };

  return (
    <>
      <Accordion className="task-root">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="task-summary"
        >
          <div className="task-checkbox">
            <input
              type="checkbox"
              onChange={() => handleCheck(task, !task["completed"])}
              value={task["completed"]}
            />
          </div>

          <p>{task["name"]}</p>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <div className="task-details">
            <p className="tasks-sideTitles">Task</p>
            <p>{task["name"]}</p>
          </div>
          <div className="task-details">
            <p className="tasks-sideTitles">Assigned</p>
            {users.map((user) => {
              return <span className="tasks-assignedUsers" key={user.username}>{user.username + "  "} </span>;
            })}
          </div>
          <div className="task-details">
            <p className="tasks-sideTitles">Desc</p>
            <p>{task["desc"]}</p>
          </div>
          <div className="task-details">
            <p className="tasks-sideTitles">Deadline</p>
            <p>{task["deadline"]}</p>
          </div>
          <Divider />
          <div className="task-Comments">
            <p className="tasks-commentTitle">Comments</p>
            <Comments task={task} handleAddComment={handleAddComment} comments={task["comments"]} />
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Task;
