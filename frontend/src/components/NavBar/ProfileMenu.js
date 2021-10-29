import React from "react";
import { Link, useHistory } from "react-router-dom";
import NavItem from "./NavItem";
const ProfileMenu = () => {
  const history = useHistory();
  const handleDashboard = () => {
      console.log("dashboard!!!")
    history.push("/")
  };
  return (
    <div className="profileMenu">
      <ProfileMenuItem to="#"> Profile </ProfileMenuItem>
      <ProfileMenuItem leftIcon="" to="dashboard">
        Dashboard
      </ProfileMenuItem>
    </div>
  );
};

const ProfileMenuItem = ({ children, to, leftIcon }) => {
  return (
    <Link to={to} className="profileItem">
      <span> {leftIcon} </span>
      {children}
    </Link>
  );
};

export default ProfileMenu;
