import React, { useEffect, useRef } from "react";

function ChatList({ chats }) {
  // Get the current user from localStorage
  const showBottom=useRef()
  const user = localStorage.getItem("user");

  // Component to render sender's chat message
  function SenderChat({ message, username, avatar }) {
    return (
      <div className="flex items-end justify-end mb-4">
        <img src={avatar} alt="sender" className="w-10 h-10 rounded-full mr-3" />
        <div className="relative max-w-xs bg-blue-100 p-2 rounded-lg shadow-lg">
          <p className="text-gray-800">
            <strong className="block">{username}</strong>
            {message}
          </p>
        </div>
      </div>
    );
  }

  // Component to render receiver's chat message
  function ReceiverChat({ message, username, avatar }) {
    return (
      <div className="flex items-end justify-start mb-4">
        <img src={avatar} alt="receiver" className="w-10 h-10 rounded-full ml-3 mr-3" />
        <div className="relative max-w-xs bg-green-100 p-2 rounded-lg shadow-lg">
          <p className="text-gray-800">
            <strong className="block">{username}</strong>
            {message}
          </p>
        </div>
      </div>
    );
  }
  useEffect(()=>{
    scrolltoBottom()
  },[chats])
const scrolltoBottom=()=>{
  showBottom.current.scrollIntoView({behaviour:"smooth"})
}
  return (
    <div className="p-4 overflow-y-scroll overflow-x-hidden h-full">
      {chats.map((chat, index) => {
        // Check if the message is from the current user
        if (chat.username === user) {
          return (
            <SenderChat
              key={index}
              message={chat.message}
              username={chat.username}
              avatar={chat.avatar}
            />
          );
        } else {
          return (
            <ReceiverChat
              key={index}
              message={chat.message}
              username={chat.username}
              avatar={chat.avatar}
            />
          );
        }
      })}
      <div ref={showBottom}></div>
    </div>
  );
}

export default ChatList;
