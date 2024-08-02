import React, { useState } from "react";

function InputMsg({ addMessage }) {
  // State to manage the input message
  const [message, setMsg] = useState('');

  // Function to handle sending a message
  const addMsgFun = () => {
    if (message.trim()) { // Ensure the message is not empty
      addMessage(message),
      setMsg(''); // Clear the message input
    }
  };

  return (
    <div className="w-5/6 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
      <textarea
        name="message"
        className="w-full h-24 sm:h-12 p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type your message..."
        onChange={(e) => setMsg(e.target.value)}
        value={message} // Bind the textarea value to the state
      />
      <button
        onClick={addMsgFun}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </div>
  );
}

export default InputMsg;
