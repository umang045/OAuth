import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io();

const Product = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    const newMessage = message;
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    socket.emit("message", newMessage);
    setMessage("");
  };

  return (
    <>
      <header className="App-header">
        <h1>Socket.IO Chat</h1>
        <div className="chat">
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </header>
    </>
  );
};

export default Product;