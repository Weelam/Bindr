import React, { useState, useEffect } from "react";
import "./style.css";
import { AiFillBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import NavItem from "./NavItem";
import ProfileMenu from "./ProfileMenu";
import Notifications from "./Notifications";
import { useHistory } from "react-router-dom";
import {
  addFriend,
  logout,
  getUser,
  removeNotification,
} from "../../actions/user";
import OtherUserModal from "./OtherUserModal";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CancelIcon from "@mui/icons-material/Cancel";
import { defaultModel } from "../../actions/defaultModel";

// taken from material UI snack bar example
const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});
// end
function Navbar({ auth, isAdmin, setCurrentUser, currentUser }) {
  const [notifDrop, setNotifDrop] = useState(false);
  const [profileDrop, setProfileDrop] = useState(false);
  const [currentUserObj, setCurrentUserObj] = useState(defaultModel);
  // notification modal states
  const [openModal, setOpenModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState();

  // snack bar
  const [openAlert, setOpenAlert] = useState(false);
  const [acceptedSignal, setAcceptedSignal] = useState(null);

  let history = useHistory();

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  useEffect(() => {
    // get current user object everytime currentUser changes
    getUser(currentUser, setCurrentUserObj);

    return () => {
      setSelectedNotification(null);
      // setCurrentUserObj(null);
    };
  }, [currentUser]);

  const handleLogout = () => {
    logout(setCurrentUser);
    history.push("/");
  };

  // handle Modal for notification
  const handleModal = (notif) => {
    setSelectedNotification(notif);
    setOpenModal(true);
    setNotifDrop(false);
  };

  // run this when a user selects a notifications to click on
  // accepts or declines the person (TAKES IN USERID RATHER THAN USERNAME!!!)
  const handleAcceptDecline = (accepted, otherUserObj) => {
    if (!currentUserObj) {
      return
    }
    console.log(currentUserObj)
    if (accepted) {
      addFriend(currentUserObj, otherUserObj);
      setAcceptedSignal(true)
    } else {
      setAcceptedSignal(false)
    }
    // send snackbar alert to user
    setOpenAlert(true);
    // remove notification in either cases
    removeNotification(selectedNotification);
  };

  return (
    <>
      <div className="nav">
        {!isAdmin ? (
          <>
            <div className="navMenu">
              <NavItem
                to="/"
                linkClass="link"
                item={<h3 className="logo">Bindr</h3>}
              />
              <div className="linkMenu">
                <NavItem to="find" linkClass="link" item="Find" />
              </div>
            </div>
            {auth ? (
              <div className="navButton">
                <NavItem
                  to="#"
                  outerDiv="notifDiv"
                  linkClass="link iconButton"
                  drop={{
                    isDropped: notifDrop,
                    setIsDropped: setNotifDrop,
                    setOtherDropped: setProfileDrop,
                  }}
                  item={<AiFillBell className="bellIcon" />}
                >
                  <Notifications
                    handleModal={handleModal}
                    currentUser={currentUser}
                  />
                </NavItem>
                <NavItem
                  to="#"
                  outerDiv="profileDiv"
                  linkClass="link iconButton"
                  drop={{
                    isDropped: profileDrop,
                    setIsDropped: setProfileDrop,
                    setOtherDropped: setNotifDrop,
                  }}
                  item={<CgProfile className="profileIcon" />}
                >
                  {/* dropdown */}
                  <ProfileMenu handleLogout={handleLogout} />
                </NavItem>
              </div>
            ) : (
              <div className="navButton">
                <NavItem to="signup" linkClass="link" item="Sign up" />
                <NavItem to="login" linkClass="link login" item="Login" />
              </div>
            )}
          </>
        ) : (
          <>
            <div className="navMenu">
              <NavItem
                to="/"
                linkClass="link"
                item={<h3 className="logo">Logo</h3>}
              />
              <div className="linkMenu">
                <NavItem to="reports" linkClass="link" item="reports" />
              </div>
              <div className="linkMenu">
                <NavItem to="users" linkClass="link" item="users" />
              </div>
              <div className="linkMenu">
                <NavItem to="courses" linkClass="link" item="courses" />
              </div>
              <div className="linkMenu">
                <NavItem to="messages" linkClass="link" item="messages" />
              </div>
            </div>
            <div className="navButton" onClick={handleLogout}>
              <NavItem to="#" linkClass="link" item="Logout" />
            </div>
          </>
        )}
        {openModal && (
          <OtherUserModal
            handleAcceptDecline={handleAcceptDecline}
            openModal={openModal}
            setOpenModal={setOpenModal}
            userID={selectedNotification["senderID"]}
          />
        )}
        {/* -- taken from material UI snackbar example --*/}
        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
        >
          <Alert
            iconMapping={{
              error: <CancelIcon fontSize="inherit" />,
            }}
            onClose={handleCloseAlert}
            severity={acceptedSignal ? "success" : "error"}
            sx={{ width: "100%" }}
          >
            {acceptedSignal ? "Friend Added" : "Match Declined"}
          </Alert>
        </Snackbar>
        {/* -- end -- */}
      </div>
      {/* <Divider className="navBar-Divider"/> */}
    </>
  );
}

export default Navbar;
