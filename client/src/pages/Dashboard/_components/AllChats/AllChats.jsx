import React, { useState } from "react";
import { useContext } from "react";
// import { useParams } from 'react-router-dom'
import ChatContext from "../../../../context/ChatContext";
import { useEffect } from "react";
import { assets } from "../../../../assets/assets";
import { Info, Send } from "lucide-react";
import { useRef } from "react";
import "./style/style.css";
import { useAppContext } from "../../../../context/AppContext";

export default function AllChats() {
  const scrollEnd = useRef();
  // const { id } = useParams();
  const { mess, chatId, user, socket, sendMessage, setMess } =
    useContext(ChatContext);
  const { axios } = useAppContext();
  // const [input, setInput] = useState("Book is Available");
  // console.log(chatId);
  const [text, setText] = useState("");
  const [chats, setChats] = useState([]);
  // console.log(user);
  // console.log(selectedUser);
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await axios.get("/api/messages/user/all");
        if (res.data.success) setChats(res.data.chats);
      } catch (err) {
        console.error("Failed to fetch chats", err);
      }
    };
    fetchChats();
  }, [axios, chatId]);

  const currentChat = chats.find(chat => chat._id === chatId);
  const otherUser = currentChat
    ? (currentChat.buyerId._id === user._id ? currentChat.sellerId : currentChat.buyerId)
    : null;


  useEffect(() => {
    if (!socket || !chatId) return;
    socket.on("receive-message", (message) => {
      setMess((prev) => [...prev, message]);
    });
    return () => socket.off("receive-message");
  }, [socket, chatId, setMess]);

  const handleSend = () => {
    if (!text.trim() || !chatId || !otherUser?._id) return;
    const msg = {
      chatId,
      senderId: user._id,
      receiverId: otherUser?._id,
      text,
    };
    socket.emit("send-message", msg);
    sendMessage(msg);
    setText("");
  };

  useEffect(() => {
    scrollEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [mess]);

  console.log("chats:", chats);
console.log("chatId:", chatId);
console.log("currentChat:", chats.find(chat => chat._id === chatId));

  // if (!chatId) {
  //   return <div className="flex items-center justify-center h-full text-gray-400">Select a chat to start messaging</div>;
  // }

  if (!currentChat) {
    return <div className="flex items-center justify-center h-full text-gray-400">Loading chat...</div>;
  }

  return (
    <div className="w-full px-4 py-2 noScroll">
      {/* Header */}
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img
          src={otherUser?.profileImage?.url || assets.defaultAvatar}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="flex-1 text-lg flex items-center gap-2">
          {otherUser ? otherUser.name : "Loading..."}
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </p>
        <Info />
      </div>

      {/* ---------------- chat area --------------- */}
      <div className="flex flex-col overflow-y-scroll  p-3 pb-6 h-[calc(100%-140px)]">
        <div className="w-full h-full">
          {mess.map((m, i) => (
            <div
              key={i}
              className={m.senderId === user._id ? "text-right" : "text-left"}
            >
              <span>{m.text}</span>
            </div>
          ))}
        </div>
        <div ref={scrollEnd}></div>
      </div>

      {/* ----------bootom area------- */}
      <div className="relative bottom-0 left-0 right-0 flex items-center gap-3 p-2">
        <div className="w-full flex justify-center items-center rounded-full p-1 border-2 border-black">
          <div className="flex-1 flex items-center bg-gray-100/12 px-3 rounded-full">
            <input
              onChange={(e) => setText(e.target.value)}
              // onKeyDown={(e)=> e.key === "Enter" ? handleSendMessage(e) : null}
              value={text}
              type="text"
              className="flex-1 text-sm p-3 border-none rounded-lg outline-none placeholder-gray-400"
            />
            {/* <input onChange={handleSendImage} type="file" name="" id="image" accept='image/png, image/jpeg' hidden/> */}
            <label htmlFor="image">
              <img
                src={assets.gallery_icon}
                alt=""
                className="w-5 mr-2 cursor-pointer"
              />
            </label>
          </div>
          {/* <img src={assets.send_button} alt="" className="w-7 cursor-pointer" /> */}
          <div
            className="bg-black w-10 h-10 me-1 flex justify-center items-center rounded-full"
            onClick={handleSend}
          >
            <Send className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
