import React, { useRef, useState } from "react";
// import { useRef } from "react";
import Conversation from "./Conversation";
import LogoSearch from "./LogoSearch";
import NavIcons from "./NavIcons";
import "./Chats.css";
import { useEffect } from "react";
import { userChats } from "./API";
import ChatBox from "./ChatBox";

//import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

const Chat = () => {
  //const dispatch = useDispatch();
  const socket = useRef();
 // const user = JSON.parse(localStorage.getItem("user"))
  //const { user } = useSelector((state) => state.authReducer.authData);

  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  //Get the chat in chat section
  // useEffect(() => {
  //   const getChats = async () => {
    
  //     try {
  //       const { data } = await userChats(user._id);
  //       setChats(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getChats();
  // }, [user._id]);

  //Connect to Socket.io
  // useEffect(() => {
  //   socket.current = io("http://localhost:8800");
  //   socket.current.emit("new-user-add", user._id);
  //   socket.current.on("get-users", (users) => {
  //     setOnlineUsers(users);
  //   });
  // }, [user]);

 // Send Message to socket server
  // useEffect(() => {
  //   if (sendMessage!==null) {
  //     socket.current.emit("send-message", sendMessage);}
  // }, [sendMessage]);


  // Get the message from socket server
  // useEffect(() => {
  //   socket.current.on("recieve-message", (data) => {
  //     console.log(data)
  //     setReceivedMessage(data);
  //   }

  //   );
  // }, []);


  // const checkOnlineStatus = (chat) => {
  //   const chatMember = chat.members.find((member) => member !== user._id);
  //   const online = onlineUsers.find((user) => user.userId === chatMember);
  //   return online ? true : false;
  // };

  return (
    <div className="Chat">
      {/* Left Side */}
    <h1 style="font-size: 80px;">please login first</h1>

      
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
              >
                {/* <Conversation
                  data={chat}
                  // currentUser={user._id}
                  // online={checkOnlineStatus(chat)}
                /> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <NavIcons />
        </div>
        {/* <ChatBox
          chat={currentChat}
          // currentUser={user._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        /> */}
      </div>
    </div>
  );
};

export default Chat;
