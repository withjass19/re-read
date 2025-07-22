import React, { useState } from "react";
import { useContext } from "react";
import { useParams } from 'react-router-dom'
import ChatContext, { ChatProvider } from "../../../../context/ChatContext";
import { useEffect } from "react";
import { assets } from "../../../../assets/assets";
import { Info, Send } from "lucide-react";
import { useRef } from "react";
import './style/style.css'

export default function AllChats() {
  const scrollEnd = useRef();
  const { id } = useParams();
  const { setMess, mess, getMessages, sendMessage, setSelectedUser, selectedUser } = useContext(ChatContext);
  const [input, setInput] = useState("Book is Available")

  // setmessage([assets.messagesDummyData]);
  // console.log(message);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if(input.trim() === " ") return null;
    await sendMessage({text: input.trim()});
    setInput("");
  }

  useEffect(() => {
    setSelectedUser(id)
    getMessages(id);
    setMess(assets.messagesDummyData);
    sendMessage(selectedUser);
  }, []);

  // console.log(messages);

  useEffect(() => {
    scrollEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="bg-red-200 w-full px-4 py-2 noScroll">
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img
          src={assets.defaultAvatar}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <p className="flex-1 text-lg text-white flex items-center gap-2">
          {/* {selectedUser.fullName} */}Jass
          {/* {onlineUsers.includes(selectedUser._id) && */}
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </p>
        <img src={assets.arrow_icon} alt="" className="max-w-7 md:hidden" />
        {/* <img src={assets.help_icon} alt="" className="max-w-5 max-md:hidden" /> */}
        <Info />
      </div>

      {/* ---------------- chat area --------------- */}
      <div className="flex flex-col overflow-y-scroll  p-3 pb-6 h-[calc(100%-120px)]">
        <p>Hello</p>
        <div className="w-full h-full">
          {mess}
        </div>
        <div ref={scrollEnd}></div>
      </div>

      {/* ----------bootom area------- */}
      <div className="relative bottom-0 left-0 right-0 flex items-center gap-3 p-3">
        <div className="flex-1 flex items-center bg-gray-100/12 px-3 rounded-full">
          <input onChange={(e) => setInput(e.target.value)}
          // onKeyDown={(e)=> e.key === "Enter" ? handleSendMessage(e) : null}
           value={input} type="text" className="flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400" />
          {/* <input onChange={handleSendImage} type="file" name="" id="image" accept='image/png, image/jpeg' hidden/> */}
          <label htmlFor="image">
            <img src={assets.gallery_icon} alt="" className="w-5 mr-2 cursor-pointer" />
          </label>
        </div>
        {/* <img src={assets.send_button} alt="" className="w-7 cursor-pointer" /> */}
        <div className="bg-sky-500 w-10 h-10 flex justify-center items-center rounded-full" onClick={handleSendMessage}>
          <Send className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
