🗨️ Basic Chat Application (MERN Stack)
This is a simple, functional chat application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The app allows users to log in and out and retains chat history without the need for authentication.

✨ Key Features
User Access: Users can log in and out of the chat without any authentication.
Persistent Chat History: Chat messages are stored in a database, ensuring the conversation history is preserved across sessions.
MERN Stack: Built using MongoDB for data storage, Express.js for the backend, React for the frontend, and Node.js to tie everything together.
🛠️ Technologies Used
React: Frontend framework for building the user interface.
Redux: For state management.
Express.js: Backend framework for handling server logic.
Node.js: JavaScript runtime used on the server.
MongoDB: NoSQL database for storing chat messages.
Socket.io: For real-time, bidirectional communication.
🛑 Prerequisites
Ensure you have the following tools installed on your system:

Node.js: Download Node.js
MongoDB: Ensure you have a running instance of MongoDB.
🚀 Getting Started
Follow these steps to get the project up and running on your local machine.

1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/basic-chat-app.git

3. Navigate to the project directory
bash
Copy code
cd basic-chat-app
4. Install dependencies
In both the client and server directories, run the following command to install the necessary dependencies:

bash
Copy code
npm install
4. Set up environment variables
Create a .env file in the server directory with the following content

Copy code
mongoURI=your_mongodb_connection_string
PORT=5000
Replace your_mongodb_connection_string with your actual MongoDB URI.

5. Start the backend server
In the server directory, run:

bash
Copy code
npm start
6. Start the frontend server
In the client directory, run:

bash
Copy code
npm start
7. Access the app
The app should now be running at http://localhost:3000. 🚀

🧪 Testing
You can open the application in multiple browser windows or tabs to simulate a real-time chat. Send and receive messages instantly!

📚 Future Enhancements
Authentication: Add user authentication to restrict chat access.
Private Chats: Allow users to initiate private conversations.
Real-Time Typing Indicator: Notify users when someone is typing.
