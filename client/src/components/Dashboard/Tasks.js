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
import InputUnstyled from "@mui/base/InputUnstyled";
import { createTask, getTasks } from "../../actions/user";
import Task from "./Task";

const taskModel = {
  // the id of the users that are responsible for this task
  users: [],
  name: "",
  desc: "",
  completed: false,
  deadline: new Date(),
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

const Tasks = ({ selectedGroup, setSelectedGroup }) => {
  const classes = useStyles({ color: "#52b788" });
  const [tasks, setTasks] = useState(selectedGroup["tasks"]);
  const [finishedTasks, setFinishedTasks] = useState([]);
  const [unfinishedTasks, setUnfinishedTasks] = useState([]);
  // task creation
  const [openModal, setOpenModal] = useState(false);
  const [newTask, setNewTask] = useState(taskModel);

  useEffect(() => {
    // get the tasks
		console.log(selectedGroup)
    getTasks(selectedGroup, setTasks);
    return () => {
      console.log("unmounted tasks");
    };
  }, [selectedGroup]);


	useEffect(() => {
		// filter the tasks everytime tasks is udpated
    filterTasks(tasks, setFinishedTasks, setUnfinishedTasks);
	}, [tasks])

  const filterTasks = (tasks, setFinishedTasks, setUnfinishedTasks) => {
    let unfinished = tasks.filter((task) => task.completed === false);
    let finished = tasks.filter((task) => task.completed === true);
    setUnfinishedTasks(unfinished);
    setFinishedTasks(finished);
  };

  // ***************** handlers ******************* //

  const handleModal = (open) => {
    setOpenModal(open);
  };

  const handleCreateTask = () => {
    if (!newTask["name"]) {
      alert("Must select a task name!");
      return;
    }

    if (newTask["users"].length === 0) {
      alert("Must assign at least one member");
      return;
    }
    // call createTask to create and add the task
    createTask(selectedGroup, newTask, setSelectedGroup);

    // reset newTask back to model and close the modal
    setNewTask(taskModel);
    setOpenModal(false);
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

  const handleModalDesc = (desc) => {
    setNewTask((prev) => ({
      ...prev,
      desc: desc,
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
      <div className="tasks-allTasks">
        <div className="tasks-unfinishedTasks">
          {unfinishedTasks.map((task, index) => {
            return <p>{task.name}</p>
          })}
        </div>
        <div className="tasks-finishedTasks">
          {finishedTasks.map((task, index) => {
            return <Task task={task} />
          })}
        </div>
      </div>

      {/* **************** Creating tasks ********************* */}
      <div className="tasks-createButton">
        <IconButton
          onClick={() => handleModal(true)}
          color="primary"
          size="small"
        >
          <AddCircleIcon fontSize="large" color="primary" />
        </IconButton>
      </div>
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
            <h3>Task Description</h3>

            <div className="tasks-modalDesc">
              <textarea
                type="text"
                onChange={(e) => handleModalDesc(e.target.value)}
                maxLength={150}
                value={newTask["desc"]}
                placeholder="task description"
              />
            </div>
            <h3>Deadline</h3>
            <div className="tasks-modalDeadline">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => (
                    <TextField fullWidth={true} {...props} />
                  )}
                  value={newTask["deadline"]}
                  onChange={(newValue) => {
                    handleModalDeadline(newValue);
                  }}
                />
              </LocalizationProvider>
            </div>
            <h3>Assign Members</h3>
            <div className="tasks-modalMembers">
              {selectedGroup["members"].map((member, index) => {
                return (
                  <div key={index} className="tasks-modalCheckbox">
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
