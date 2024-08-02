import React, { useEffect, useState } from "react";
import ChatList from "./ChatList";
import InputMsg from "./InputMsg";
import UserLogin from "./UserLogin";
import socketIOClient from "socket.io-client";

function ChatContainer() {
  // State to manage the current user and chat messages
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [chats, setChats] = useState([]);
  const socketio = socketIOClient("http://localhost:3001");

  // Effect to handle socket connection and incoming messages
  useEffect(() => {
    // Event listener for receiving all chat messages initially
    socketio.on("chat", (receivedChats) => {
      console.log("Received initial chat messages:", receivedChats);
      setChats(receivedChats);
    });

    // Event listener for receiving new chat messages
    socketio.on("message", (msg) => {
      console.log("Received new message:", msg);
      setChats((previousChats) => [...previousChats, msg]);
    });

    // Cleanup the effect to avoid memory leaks
    return () => {
      socketio.off("chat");
      socketio.off("message");
    };
  }, []); // Empty dependency array to run only once

  // Function to add a new message
  const addMessage = (chat) => {
    const newChat = {
      username: localStorage.getItem("user"),
      message: chat,
      avatar: localStorage.getItem("avatar"),
      timeStamp: new Date().toISOString() // Add a timestamp
    };
    console.log("Sending new message:", newChat);
    socketio.emit("newMessage", newChat);
  };

  // Function to handle logout
  const logoutFun = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('avatar');
    setUser('');
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {user ? (
        <>
          <div className="h-1/7 bg-blue-500 text-white flex justify-between items-center px-4 py-2">
            <h3>Username: {user}</h3>
            <h3>ChatApp</h3>
            <h3 className="cursor-pointer hover:underline" onClick={logoutFun}>Logout</h3>
          </div>
          <div className="flex-grow overflow-y-auto">
            <ChatList chats={chats} />
          </div>
          <div className="h-1/6 bg-gray-200 flex justify-center items-center p-4">
            <InputMsg addMessage={addMessage} />
          </div>
        </>
      ) : (
        <UserLogin setUser={setUser} />
      )}
    </div>
  );
}

export default ChatContainer;
