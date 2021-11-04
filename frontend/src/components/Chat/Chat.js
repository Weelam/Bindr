import React, { useState, useEffect } from "react";
import "./styleChat.css";
import data from "./Messages.js";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import Message from "./Message";

const messageData = data["data"];

const Chat = ({ currentUser }) => {
  // As for now the chat only works one way since we need a backend in order to make this functional
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(messageData);
  const [yourMessages, setYourMessages] = useState("");
  const [othersMessages, setOtherMessages] = useState("");
  const [messagesEnd, setMessagesEnd] = useState();

  const scrollToBottom = () => {
    if (messagesEnd) {
      messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  useEffect(() => {
    console.log(messages);
    scrollToBottom();
  }, [messages]);

  return (
    <div className="messageRoot">
      <div className="chatContainer">
        <ul>
          {messages.map((msg, index) => {
            let isYourMessage = msg["sender"] === currentUser["userID"];
            return (
              <Message index={index} isYourMessage={isYourMessage} msg={msg} />
            );
          })}
        </ul>
        <div
          style={{ float: "left", clear: "both" }}
          ref={(r) => {
            setMessagesEnd(r);
          }}
        ></div>
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
