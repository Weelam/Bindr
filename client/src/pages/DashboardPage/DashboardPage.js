import { Button, Divider } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { defaultModel } from "../../actions/defaultModel";
import {
  createGroup,
  getFriends,
  getGroups,
  getUser,
} from "../../actions/user";
import Friend from "../../components/Dashboard/Friend";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import "./dashboardPageStyle.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@mui/styles";
import Group from "../../components/Dashboard/Group";
import Tasks from "../../components/Dashboard/Tasks";
import Members from "../../components/Dashboard/Members";
import Discussions from "../../components/Dashboard/Discussions";

// customize mui theme
const theme = createTheme({
  palette: {
    primary: { main: "#52b788" },
  },
});

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
    width: "80%",
    color: "white",
    // flex-grow: 1;
    margin: "10px 0",
    background: props.color,
    transition: "filter 300ms",
    "&:hover": {
      background: props.color,
      filter: "brightness(1.2)",
    },
  }),
  tab: {
    margin: "20px 0"
  }
});

// group model
const groupModel = {
  projectName: "",
  members: [],
  task: [],
  discussions: [],
};

const DashboardPage = ({ currentUser }) => {
  // usestyles
  const [props, setProps] = useState({ color: "#52b788" });
  const classes = useStyles(props);
  // user data states
  const [currentUserObj, setCurrentUserObj] = useState(defaultModel);
  const [friends, setFriends] = useState([]);
  const [groups, setGroups] = useState([groupModel]);
  const [selectedGroup, setSelectedGroup] = useState(); // store the id of the group

  // tab/modal states
  const [leftTab, setLeftTab] = useState(0);
  const [rightTab, setRightTab] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [newGroup, setNewGroup] = useState(groupModel);

  useEffect(() => {
    // getUser, getFriends, getGroups
    getUser(currentUser, setCurrentUserObj);
    getFriends(currentUser, setFriends);
  }, [currentUser]);

  useEffect(() => {
    // want to reupdate the groups when currentUserObj updates
    getGroups(currentUser, setGroups);
  }, [currentUserObj]);

  // tabs and modals handling
  const handleLeftTab = (e, value) => {
    setLeftTab(value);
  };

  const handleRightTab = (e, value) => {
    setRightTab(value);
  };

  const handleModal = (open) => {
    setOpenModal(open);
  };

  // creating groups, tasks, discussions
  const handleCreateGroup = () => {
    if (!newGroup["projectName"] || newGroup["members"].length < 1) {
      alert("Select a project name and at least one member!");
      return;
    }
    // create the group, and then update 'groups' and 'currentUser'
    createGroup(
      currentUser,
      {
        ...newGroup,
        members: [...newGroup["members"], currentUserObj["_id"]],
      },
      setCurrentUserObj
    );

    // close modal and set newGroup back to default
    setNewGroup(groupModel);
    setOpenModal(false);
  };

  // update selectedGroup
  const handleCreateGroupMembers = (friend) => {
    if (newGroup["members"].includes(friend)) {
      setNewGroup((prev) => ({
        ...prev,
        members: prev["members"].filter((item) => item !== friend),
      }));
    } else {
      setNewGroup((prev) => ({
        ...prev,
        members: [...new Set([...prev["members"], friend])],
      }));
    }
  };

  const handleCreateGroupName = (name) => {
    setNewGroup((prev) => ({
      ...prev,
      projectName: name,
    }));
  };

  const handleSelectedGroup = (group) => {
    setSelectedGroup(group);
    console.log("selected group", group);
  };

  const handleCreateDiscussion = () => {
    console.log("creating discussions");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="dashboardPage-root">
        {/* ************************ left side **********************	*/}
        <div className="dashboardPage-left">
          <div className="dashboardPage-profile">
            <div className="dashboardPage-profileImgContainer">
              <img
                className="dashboardPage-profileImg"
                src={currentUserObj["profile"]["profileImg"]}
              />
            </div>
            <div className="dashboardPage-profileDetails">
              <h3>{currentUserObj["username"]}</h3>
              <p>Year {currentUserObj["profile"]["year"]}</p>
              <p>{currentUserObj["profile"]["program"]}</p>
            </div>
          </div>
          <Divider variant="middle" className="dashboardPage-leftDivider" />
          <div className="dashboardPage-friendGroup">
            <Tabs
              value={leftTab}
              onChange={handleLeftTab}
              textColor="primary"
              indicatorColor="primary"
              aria-label="basic tabs example"
              centered
            >
              <Tab label="Friends" />
              <Tab label="Groups" />
            </Tabs>
            {/* insert friend/group components here */}
            {leftTab === 0 ? (
              <div className="dashboardPage-friendsContainer">
                {friends.map((friend, index) => {
                  return <Friend key={index} friend={friend} />;
                })}
              </div>
            ) : (
              <div className="dashboardPage-groupsContainer">
                <div className="dashboardPage-groups">
                  {groups.map((group, index) => {
                    return (
                      <Group
                        key={index}
                        handleSelectedGroup={handleSelectedGroup}
                        group={group}
                      />
                    );
                  })}
                </div>
                <div className="dashboardPage-addGroupContainer">
                  <Divider className="dashboardPage-groupDivider" />
                  <Button
                    onClick={() => handleModal(true)}
                    color="primary"
                    size="large"
                    variant="outlined"
                  >
                    {/* <AddCircleIcon fontSize="large" color="primary" /> */}
                    Add Group
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ************************ right side **********************	*/}

        <Divider
          variant="middle"
          orientation="vertical"
          className="dashboardPage-mainDivider"
        />
        <div className="dashboardPage-right">
          <Tabs
            value={rightTab}
            onChange={handleRightTab}
            textColor="primary"
            indicatorColor="primary"
            aria-label="basic tabs example"
            centered
            className={classes.tab}
          >
            <Tab label="Tasks" />
            <Tab label="Discussions" />
            <Tab label="Members" />
          </Tabs>

          {selectedGroup ? (
            <>
              {rightTab === 0 && (
                <Tasks
                  currentUser={currentUser}
                  selectedGroup={selectedGroup}
                  setSelectedGroup={setSelectedGroup}
                />
              )}

              {rightTab === 1 && (
                <div className="dashboardPage-discussions">
                  <Discussions
                    currentUser={currentUser}
                    selectedGroup={selectedGroup}
                    setSelectedGroup={setSelectedGroup}
                  />
                </div>
              )}
              {rightTab === 2 && <Members members={selectedGroup["members"]} />}
            </>
          ) : (
            <div className="dashboardPage-selectGroup">
              <h2>Please Select a group</h2>
            </div>
          )}

          {/* modal that is opened to create group */}
          <Modal open={openModal} onClose={() => handleModal(false)}>
            <div className="dashboardPage-groupModal">
              <h2>Select Members</h2>
              <div className="dashboardPage-friendsContainer dashboardPage-modalFriends">
                {friends.map((friend, index) => {
                  return (
                    <div key={index} className={classes.modalItem}>
                      <input
                        type="checkbox"
                        onChange={() => handleCreateGroupMembers(friend)}
                        value={friend}
                      />
                      <Friend key={index} friend={friend} />
                    </div>
                  );
                })}
              </div>
              <div className="dashboardPage-modalFooter">
                <input
                  value={newGroup["projectName"]}
                  onChange={(e) => handleCreateGroupName(e.target.value)}
                  type="text"
                  placeholder="group name"
                />
                <Button
                  className={classes.button}
                  variant="contained"
                  onClick={handleCreateGroup}
                >
                  Create Group
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashboardPage;
