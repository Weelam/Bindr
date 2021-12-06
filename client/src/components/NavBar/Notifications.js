import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { getNotifications } from "../../actions/user";


const notificationsModel = [{
  senderID: "sender",
  recipientID: "recipient",
  content: "loading..."
}]

const Notifications = ({ currentUser, handleModal }) => {
  const [notifications, setNotifications] = useState(notificationsModel)


  // load in the notifications at the beginning
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
          <NotificationsItem onClick={() => handleModal(notif)} key={i} to="#">{notif["content"]}</NotificationsItem>
        )
      })}
    </div>
  );
};

const NotificationsItem = ({ children, to, leftIcon, onClick}) => {
  return (
    <>
      <Link to={to} onClick={onClick} className="notifcationItem">
        <span>{children}</span>
      </Link>
    </>
  );
};

export default Notifications;
