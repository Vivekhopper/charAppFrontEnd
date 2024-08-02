import React, { useState } from 'react'
import { FaReact } from 'react-icons/fa'
import _ from "lodash"
function UserLogin({setUser}) {
  const [username,setUsername]=useState("");
  const handleUser = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    localStorage.setItem("user", username); // Save username to localStorage
    setUser(username); // Update user state in the parent component
    // Generate a random avatar URL and save it to localStorage
    localStorage.setItem("avatar", `https://picsum.photos/id/${_.random(1, 1000)}/200/300`);
  };
  return (
    <div className="flex flex-col items-center  min-h-screen bg-gray-100 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <FaReact className="text-blue-500 text-5xl" />
        <h2 className="text-4xl font-bold text-gray-800">ChatApp</h2>
      </div>
      <form className="w-full  max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input 
          onChange={(e)=>setUsername(e.target.value)}
            type="text" 
            name="name" 
            id="name" 
            placeholder="Enter Your Name" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-center items-center">
          <button 
          onClick={handleUser}
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserLogin
