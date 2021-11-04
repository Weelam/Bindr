import React, { useState } from "react";
import "./styleChat.css";
import data from "./Messages.js";

const messageData = data["data"];

const Chat = ({ currentUser }) => {
  // As for now the chat only works one way since we need a backend in order to make this functional
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(messageData);
  const [yourMessages, setYourMessages] = useState("");
  const [othersMessages, setOtherMessages] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    console.log("MESSAGE", message);
    if (message) {
      setMessages((prev) => {
        let newSender = currentUser["userID"];
        let newTime = new Date(Date.now());
        let newContent = message;
        return [
          ...prev,
          { sender: newSender, time: newTime, content: newContent },
        ];
      });
      setMessage("");
    }
  };

  const formatDate = (date) => {
    console.log(date);
    return date.toLocaleString("en-US");
  };
  console.log(messages);
  return (
    <div className="messageRoot">
      <div className="chatContainer">
        <ul>
          {messages.map((msg, index) => {
            let isYourMessage = msg["sender"] === currentUser["userID"];
            return (
              <li
                key={index}
                className={
                  isYourMessage ? "message yourMessage" : "message otherMessage"
                }
              >
                <p>{msg["content"]}</p>
                <p>{`${formatDate(msg["time"])}`}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="chatForm">
        <form onSubmit={handleSend}>
          <input
            className="messageContent"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="message"
            type="text"
          />
          <input className="chatSubmit" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Chat;
