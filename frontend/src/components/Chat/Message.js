import React from "react";
import "./styleMessage.css";

const Message = ({ isYourMessage, msg, sender }) => {
  const formatDate = (date) => {
    return date.toLocaleString("en-US");
  };
  return (
    <li

      className={isYourMessage ? "message yourMessage" : "message otherMessage"}
    >
      <div className="senderAvatar">
        <img src={sender["profileImg"]}/>
      </div>
      <div className="msgRightSide">
        <div className="msgHeader">
          <p>{sender["firstName"]}</p>
          <span>{`${formatDate(msg["time"])}`}</span>
        </div>
        <div className="msgContent">
          <p>{msg["content"]}</p>
        </div>
      </div>
    </li>
  );
};

export default Message;
