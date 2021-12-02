import React from "react";
import "./styleMessage.css";

const Message = ({ isYourMessage, msg, sender, sameSender }) => {
  const formatDate = (date) => {
    return date.toLocaleString("en-US");
  };
  return (
    <li
      className={sameSender ? "message sameSender" : "message" }
    >
      <div className="senderAvatar">
        {!sameSender && <img src={sender["profileImg"]} alt=""/>}
      </div>

      <div className="msgRightSide">
        {!sameSender && (
          <div className="msgHeader">
            <p>{sender["firstName"]}</p>
            <span>{`${formatDate(msg["time"])}`}</span>
          </div>
        )}
        <div className="msgContent">
          <p>{msg["content"]}</p>
        </div>
      </div>
    </li>
  );
};

export default Message;
