import React from "react";
import Sidebar from "./_components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import ChatSidebar from "./_components/AllChats/ChatSidebar";

const Dashboard = () => {
  const location = useLocation();

  const isChatRoute = location.pathname.startsWith("/user/dashboard/all-chats");

  return (
    <div className="min-h-screen w-full bg-slate-100 md:pt-28">
      {/* Header */}
      {/* <div className="w-full bg-white shadow py-4 px-6 mb-6">
        <h2 className="text-2xl font-semibold text-center md:text-left">
          👤 Profile
        </h2>
      </div> */}

      {/* Content */}
      <div className="max-w-7xl md:min-h-[45rem] mx-auto px-4 pb-8 sm:px-8 grid grid-cols-1 grid-rows-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="bg-white rounded-lg shadow hidden md:block">
          {/* <p className="text-lg font-medium">Sidebar / Dashboard Menu</p> */}
          {/* <Sidebar/> */}
          {isChatRoute ? <ChatSidebar/> : <Sidebar />}
        </div>

        {/* Main content */}
        <div className="md:col-span-3 h-fullflex flex-col gap-6">
          {/* Banner & Avatar */}
          <div className="bg-white h-full flex justify-center  rounded-lg shadow overflow-hidden">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
