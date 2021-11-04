import React from "react";

const Message = ({ index, isYourMessage, msg }) => {
  const formatDate = (date) => {
    return date.toLocaleString("en-US");
  };
  return (
    <li
      key={index}
      className={isYourMessage ? "message yourMessage" : "message otherMessage"}
    >
      <p>{msg["content"]}</p>
      <p>{`${formatDate(msg["time"])}`}</p>
    </li>
  );
};

export default Message;
