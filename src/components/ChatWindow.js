import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import "../styles/styles.css";
import Sidebar from "./Sidebar";

const ChatWindow = ({ muted, away }) => {
  const [messages, setMessages] = useState([
    {
      user: "Nobita",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      type: "received",
    },
    {
      user: "Roman",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      type: "sent",
    },
  ]);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { user: "You", text: message, type: "sent" }]);
      setMessage("");
    }
  };

  return (
    <>
       <div className="d-flex vh-100">
        <Sidebar />
        <div className="flex-grow-1 d-flex flex-column p-3 chat-container">
          <h5 className="outer-name">#Dimond</h5>
          <div className="flex-grow-1 chat-box">
            {messages.map((msg, index) => (
              <div key={index} className="message-container">
                <span
                  className={`username ${
                    msg.type === "received" ? "received" : ""
                  }`}
                >
                  {msg.user}
                </span>
                <div className={msg.type === "sent" ? "sent" : "received"}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex mt-3">
            <button className="end-chat-button me-3">
              <FaSignOutAlt className="me-2" /> End Chat
            </button>
            <input
              type="text"
              className="message-input"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={away || muted}
            />
            <button
              className="send-button ms-3"
              onClick={handleSendMessage}
              disabled={away || muted}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
