import React, { useState, useEffect } from "react";
import "./style.css";
import { AiFillBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import NavItem from "./NavItem";
import ProfileMenu from "./ProfileMenu";
import Notifications from "./Notifications";
import { useHistory } from "react-router-dom";
import {addFriend, logout, getUser } from "../../actions/user"
import OtherUserModal from "./OtherUserModal";
import { defaultModel } from "../../actions/defaultModel";

function Navbar({ auth, isAdmin, setCurrentUser, currentUser }) {
  const [notifDrop, setNotifDrop] = useState(false);
  const [profileDrop, setProfileDrop] = useState(false);
  const [currentUserObj, setCurrentUserObj] = useState(defaultModel)
  // notification modal states
  const [openModal, setOpenModal] = useState(false);
  const [selectedUserID, setSelectedUserID] = useState();

  let history = useHistory();


  useEffect(() => {
    // get current user object
    getUser(currentUser, setCurrentUserObj)
  }, [])

  const handleLogout = () => {
    logout(setCurrentUser);
    history.push("/");
  };


  // handle Modal for notification
  const handleModal = (notif) => {
    setSelectedUserID(notif.senderID);
    setOpenModal(true);
    setNotifDrop(false);
  };

  // run this when a user selects a notifications to click on
  // accepts or declines the person (TAKES IN USERID RATHER THAN USERNAME!!!)
  const handleAcceptDecline = (accepted, otherUserObj) => {
    if (accepted) {
      addFriend(currentUserObj, otherUserObj)
      console.log('handleacceptdecline')

    }
  }

  return (
    <>
      <div className="nav">
        {!isAdmin ? (
          <>
            <div className="navMenu">
              <NavItem
                to="/"
                linkClass="link"
                item={<h3 className="logo">Logo</h3>}
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
                  drop={{isDropped: notifDrop, setIsDropped: setNotifDrop, setOtherDropped: setProfileDrop}}
                  item={<AiFillBell className="bellIcon" />}
                >
                  <Notifications handleModal={handleModal} currentUser={currentUser} />
                </NavItem>
                <NavItem
                  to="#"
                  outerDiv="profileDiv"
                  linkClass="link iconButton"
                  drop={{isDropped: profileDrop, setIsDropped: setProfileDrop, setOtherDropped: setNotifDrop}}
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
          userID={selectedUserID}
        />
      )}
      </div>
      {/* <Divider className="navBar-Divider"/> */}
    </>
  );
}

export default Navbar;
