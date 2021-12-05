import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { getNotifications } from "../../actions/user";

const notificationsModel = [{
  sender: "sender",
  recipient: "recipient",
  content: "content"
}]

const Notifications = ({ currentUser }) => {
  const [notifications, setNotifications] = useState(notificationsModel)

  useEffect(async () => {
    const notifications = await getNotifications(currentUser)
    setNotifications(notifications)
  }, []);

  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <Divider />
      {notifications.map((notif, i) => {
        return (
          <NotificationsItem key={i} to="#">{notif["content"]}</NotificationsItem>
        )
      })}

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
