import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

const Notifications = () => {
  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <Divider />
      <NotificationsItem to="#">No new notifications</NotificationsItem>
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
