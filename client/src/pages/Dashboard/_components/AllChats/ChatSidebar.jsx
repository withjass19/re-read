import React from 'react'
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // Icon library

export default function ChatSidebar() {
  const navigate = useNavigate();

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
      <div className="flex flex-col gap-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        {[1, 2, 3, 4, 5].map((chat, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-lg shadow hover:bg-slate-100 cursor-pointer transition"
          >
            <h3 className="text-sm font-medium text-gray-900">User {chat}</h3>
            <p className="text-xs text-gray-600 truncate">Last message preview...</p>
          </div>
        ))}
      </div>
    </div>
  );
};