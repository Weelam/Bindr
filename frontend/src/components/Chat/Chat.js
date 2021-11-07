import React, { useState, useEffect, useRef } from "react";
import "./styleChat.css";
import data from "./Messages.js";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import Message from "./Message";

// this is the mock data for messages, this will of course be different for each user (Message.js for more detail)
// here, the app will make a fetch call to the database to fetch the data
const messageData = data["data"];

const Chat = ({ currentUser, users }) => {
  // As for now the chat only works one way since we need a backend in order to make this functional
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(messageData);
  const [yourMessages, setYourMessages] = useState("");
  const [othersMessages, setOtherMessages] = useState("");
  const messagesEnd = useRef(null);

  const scrollToBottom = () => {
    if (messagesEnd) {
      messagesEnd.current.scrollIntoView({
        block: "nearest",
        inline: "center",
        behavior: "smooth",
        alignToTop: false,
      });
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
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

  const findSender = (id) => {
    return users.filter((user) => user["userID"] === id)[0];
  };

  useEffect(() => {
    console.log(messages);
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // scroll to bottom on load
    scrollToBottom();
  }, []);

  return (
    <div className="messageRoot">
      <div className="chatContainer">
        <ul>
          {messages.map((msg, index) => {
            let isYourMessage = msg["sender"] === currentUser["userID"];
            let sameSender = false;
            if (index !== 0) {
              sameSender = msg["sender"] === messages[index-1]["sender"];
            }
            return (
              <Message
                key={index}
                isYourMessage={isYourMessage}
                msg={msg}
                sender={findSender(msg["sender"])}
                sameSender={sameSender}
              />
            );
          })}
        </ul>
        <div style={{ float: "left", clear: "both" }} ref={messagesEnd}></div>
      </div>
      <div className="chatForm">
        <form onSubmit={handleSend}>
          <input
            className="messageContent"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Message"
            type="text"
          />
          <input className="messageSend" type="submit" />
          <IconButton onClick={(e) => handleSend(e)} className="sendIcon">
            <SendIcon fontSize="small" />
          </IconButton>
        </form>
      </div>
    </div>
  );
};

export default Chat;
