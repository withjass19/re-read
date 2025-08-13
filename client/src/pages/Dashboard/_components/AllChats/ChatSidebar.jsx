import React, { useEffect, useState, useContext } from "react";
import ChatContext from "../../../../context/ChatContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // Icon library
import { useAppContext } from "../../../../context/AppContext";

export default function ChatSidebar() {
  const navigate = useNavigate();

  const { getMessages, setChatId, chatId } = useContext(ChatContext);
  const { axios, user} = useAppContext();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (!chatId) return;
    // fetch messages for chatId
    getMessages(chatId);
  }, [chatId]);

  const fetchChats = async () => {
    try {
      const res = await axios.get("/api/messages/user/all");
      if (res.data.success) setChats(res.data.chats);
    } catch (err) {
      console.error("Failed to fetch chats", err);
    }
  };

  useEffect(() => {
    fetchChats();
  }, [chatId]);

  // useEffect(() => {
  //   const fetchChats = async () => {
  //     try {
  //       const res = await axios.get("/api/messages/user/all");
  //       if (res.data.success) setChats(res.data.chats);
  //     } catch (err) {
  //       console.error("Failed to fetch chats", err);
  //     }
  //   };
  //   // fetchChats();
  // }, []);

  // sendMessage(msg).then(() => {
  //   fetchChats(); // sidebar को refresh करो
  // });

  const uniqueChats = Array.from(new Map(chats.map(chat => [chat._id, chat])).values());

  const handleSelectChat = (chat) => {
    // const otherUser = chat.buyerId._id === user._id ? chat.sellerId : chat.buyerId;
    // setuserId(otherUser._id);
    setChatId(chat._id)
    navigate(`/user/dashboard/all-chats/chat/${chat._id}`);
  };
  
  
  
  return (
    <div className="h-full w-full p-4 flex flex-col">
      {/* Back Button */}
      <div className="flex items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      </div>

      {/* Heading */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Chats</h2>

      {/* Chat list mockup */}
      {/* <div className="flex flex-col gap-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        {[1, 2, 3, 4, 5].map((chat, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-lg shadow hover:bg-slate-100 cursor-pointer transition"
          >
            <h3 className="text-sm font-medium text-gray-900">User {chat}</h3>
            <p className="text-xs text-gray-600 truncate">Last message preview...</p>
          </div>
        ))}
      </div> */}
      {/* Chat list */}
      <div className="flex flex-col gap-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        {chats.length === 0 && <div>No chats found.</div>}
        {chats.map((chat) => {
          const otherUser = chat.buyerId._id === user._id ? chat.sellerId : chat.buyerId;
          return (
            <div
              key={chat._id}
              className={`bg-white p-3 rounded-lg shadow hover:bg-slate-100 cursor-pointer transition ${chatId === chat._id ? "bg-slate-200" : ""}`}
              onClick={() => handleSelectChat(chat)}
            >
              {/* <div>
                <img src={otherUser.photoPic} alt="" srcset="" />
              </div> */}
              <h3 className="text-sm font-medium text-gray-900">{otherUser.name}</h3>
              <p className="text-xs text-gray-600 truncate">{chat.bookId?.bookName || "Book"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};