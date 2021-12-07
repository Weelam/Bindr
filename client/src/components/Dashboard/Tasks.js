import React, { useState, useEffect } from "react";
import { Divider, IconButton, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./styles/tasksStyle.css";
import Member from "./Member";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import InputUnstyled from '@mui/base/InputUnstyled';

const taskModel = {
  // the id of the users that are responsible for this task
  users: [],
  name: "",
  task: "",
  completed: false,
  deadline: Date.now(),
  comments: [],
};
// mui styles
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
});

const Tasks = ({ group }) => {
  const classes = useStyles({ color: "#52b788" });
  const [tasks, setTasks] = useState(group["tasks"]);

  // task creation
  const [openModal, setOpenModal] = useState(false);
  const [newTask, setNewTask] = useState(taskModel);

  const handleModal = (open) => {
    setOpenModal(open);
  };

  const handleCreateTask = () => {
    console.log(newTask);

    setNewTask(taskModel);
  };

  const handleModalName = (name) => {
    setNewTask((prev) => ({
      ...prev,
      name: name,
    }));
  };

  const handleModalDeadline = (date) => {
    setNewTask((prev) => ({
      ...prev,
      deadline: date,
    }));
  };

  const handleAssignMembers = (member) => {
    if (newTask["users"].includes(member)) {
      setNewTask((prev) => ({
        ...prev,
        users: prev["users"].filter((item) => item !== member),
      }));
    } else {
      setNewTask((prev) => ({
        ...prev,
        users: [...new Set([...prev["users"], member])],
      }));
    }
  };
  return (
    <div>
      <IconButton
        onClick={() => handleModal(true)}
        color="primary"
        size="small"
      >
        <AddCircleIcon fontSize="large" color="primary" />
      </IconButton>

      <Modal open={openModal} onClose={() => handleModal(false)}>
        <div className="tasks-modal">
          <div className="tasks-modalBody">
            <h3>Task Name</h3>
            <div className="tasks-modalName">
              <input
                type="text"
                onChange={(e) => handleModalName(e.target.value)}
                value={newTask["name"]}
                placeholder="task name"
              />
            </div>
            <h3>Deadline</h3>
            <div className="tasks-modalDeadline">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField  fullWidth={true} {...props} />}
                  value={newTask["deadline"]}
                  onChange={(newValue) => {
                    handleModalDeadline(newValue)
                  }}
                />
              </LocalizationProvider>
            </div>
            <h3>Assign Members</h3>
            <div className="tasks-modalMembers">
              {group["members"].map((member, index) => {
                return (
                  <div key={index} className={classes.modalItem}>
                    <input
                      type="checkbox"
                      onChange={() => handleAssignMembers(member)}
                      value={member}
                    />
                    <Member key={index} member={member} />
                  </div>
                );
              })}
            </div>
            <Divider />
          </div>

          <div className="tasks-modalFooter">
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleCreateTask}
            >
              Create Task
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Tasks;
