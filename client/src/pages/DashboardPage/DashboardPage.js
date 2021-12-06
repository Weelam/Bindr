import { Divider } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { defaultModel } from "../../actions/defaultModel";
import { getFriends, getUser } from "../../actions/user";
import Friend from "../../components/Dashboard/Friend";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import "./dashboardPageStyle.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";

// customize mui theme
const theme = createTheme({
  palette: {
    primary: { main: "#52b788" },
  },
});

const DashboardPage = ({ currentUser }) => {
	// user data states
  const [currentUserObj, setCurrentUserObj] = useState(defaultModel);
  const [friends, setFriends] = useState([]);
  const [groups, setGroups] = useState([]);
	const [tasks, setTasks] = useState([]);
	const [discussions, setDiscussions] = useState([]);

	// tab states
  const [leftTab, setLeftTab] = useState(0);
  const [rightTab, setRightTab] = useState(0);

  useEffect(() => {
    getUser(currentUser, setCurrentUserObj);
    getFriends(currentUser, setFriends);
  }, []);

  const handleLeftTab = (e, value) => {
    setLeftTab(value);
  };

  const handleRightTab = (e, value) => {
    setRightTab(value);
  };

  const handleCreateGroup = () => {
    console.log("creating group");
    // open a modal to create a group
  };

  const handleCreateTasks = () => {
    console.log("creating tasks");
  };

  const handleCreateDiscussion = () => {
    console.log("creating discussions");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="dashboardPage-root">
        {/* left side */}
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
                <IconButton
                  onClick={handleCreateGroup}
                  color="primary"
                  size="small"
                >
                  <AddCircleIcon fontSize="large" color="primary" />
                </IconButton>
              </div>
            )}
          </div>
        </div>
        {/* right side	*/}
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
          >
            <Tab label="Tasks" />
            <Tab label="Discussions" />
          </Tabs>

          {rightTab === 0 && (
            <div className="dashboardPage-tasks">
              <IconButton
                onClick={handleCreateTasks}
                color="primary"
                size="small"
              >
                <AddCircleIcon fontSize="large" color="primary" />
              </IconButton>
            </div>
          )}
          {rightTab === 1 && (
            <div className="dashboardPage-discussions">
              <IconButton
                onClick={handleCreateDiscussion}
                color="primary"
                size="small"
              >
                <AddCircleIcon fontSize="large" color="primary" />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashboardPage;
