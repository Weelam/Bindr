import React, { useState } from "react";
import "./style.css";
import { AiFillBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import NavItem from "./NavItem";
import ProfileMenu from "./ProfileMenu";
import Notifications from "./Notifications";
import { useHistory } from "react-router-dom";
import {logout} from "../../actions/user"

function Navbar({ auth, isAdmin, setCurrentUser }) {
  let history = useHistory();

  const handleLogout = () => {
    logout(setCurrentUser);
    history.push("/");
  };

  const [notifDrop, setNotifDrop] = useState(false);
  const [profileDrop, setProfileDrop] = useState(false);

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
                  <Notifications />
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
      </div>
      {/* <Divider className="navBar-Divider"/> */}
    </>
  );
}

export default Navbar;
