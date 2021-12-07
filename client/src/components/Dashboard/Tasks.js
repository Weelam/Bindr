import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Tasks = ({ group }) => {
  const [tasks, setTasks] = useState(group["tasks"]);
  console.log(tasks);
  const handleCreateTasks = () => {
    console.log("creating tasks");
  };

  return (
    <div>
      <IconButton onClick={handleCreateTasks} color="primary" size="small">
        <AddCircleIcon fontSize="large" color="primary" />
      </IconButton>
    </div>
  );
};

export default Tasks;
