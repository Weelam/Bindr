import React, { useState, useEffect } from "react";
import Discussion from "./Discussion";
import { Divider, IconButton, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./styles/discussionsStyle.css";
const discussionModel = {
  title: "",
  desc: "",
  dateAdded: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
  comments: [],
};

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

const Discussions = ({ currentUser, selectedGroup, setSelectedGroup }) => {
  const classes = useStyles({ color: "#52b788" });
  const [discussions, setDiscussions] = useState([]);

  // task creation
  const [openModal, setOpenModal] = useState(false);
  const [newDiscussion, setNewDiscussion] = useState(discussionModel);

  // ***************** handlers ******************* //

	useEffect(() => {
		console.log(discussions)
	}, [discussions])
	
  const handleModal = (open) => {
    setOpenModal(open);
  };

  const handleCreateDiscussion = () => {
    if (!newDiscussion["title"]) {
      alert("Must select a discussion title!");
      return;
    }

    if (!newDiscussion["desc"]) {
      alert("Must provide a description");
      return;
    }
    // call createTask to create and add the task
		setDiscussions(prev => [...prev, newDiscussion])
    // reset newDiscussion back to model and close the modal
    setNewDiscussion(discussionModel);
    setOpenModal(false);
  };

	
  const handleModalTitle = (title) => {
    setNewDiscussion((prev) => ({
      ...prev,
      title: title,
    }));
  };

  const handleModalDesc = (desc) => {
    setNewDiscussion((prev) => ({
      ...prev,
      desc: desc,
    }));
  };


  return (
    <div className="discussions-root">
      <div className="discussions-allTasks">
				{discussions.map((discussion, i) => {
					return <Discussion currentUser={currentUser} discussion={discussion}/>
				})}

			</div>

      {/* **************** Creating discussions ********************* */}
      <div className="discussions-createButton">
        <IconButton
          onClick={() => handleModal(true)}
          color="primary"
          size="small"
        >
          <AddCircleIcon fontSize="large" color="primary" />
        </IconButton>
      </div>
      <Modal open={openModal} onClose={() => handleModal(false)}>
        <div className="discussions-modal">
          <div className="discussions-modalBody">
            <h3>Title</h3>
            <div className="discussions-modalName">
              <input
                type="text"
                onChange={(e) => handleModalTitle(e.target.value)}
                value={newDiscussion["title"]}
                placeholder="discussion name"
              />
            </div>
            <h3>Description</h3>
            <div className="discussions-modalDesc">
              <textarea
                type="text"
                onChange={(e) => handleModalDesc(e.target.value)}
                maxLength={150}
                value={newDiscussion["desc"]}
                placeholder="task description"
              />
            </div>
            <Divider />
          </div>
          <Divider />

          <div className="discussions-modalFooter">
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleCreateDiscussion}
            >
              Create Discussion
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Discussions;
