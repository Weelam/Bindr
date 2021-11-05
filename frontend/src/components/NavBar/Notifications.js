import React from "react";
import { Link, useHistory } from "react-router-dom";
import NavItem from "./NavItem";
import { CgProfile } from "react-icons/cg";
import { BsFillGearFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { Divider } from "@mui/material";

const Notifications = () => {
  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <Divider />
      No new notifications 
    </div>
  );
};

const NotificationsItem = ({ children, to, leftIcon }) => {
  return (
    <>
      <Link to={to} className="notifcationItem">
        <span>{children}</span>
      </Link>
    </>
  );
};

export default Notifications;
