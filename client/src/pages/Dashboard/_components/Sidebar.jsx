import React from "react";
import { Home, User, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const links = [
    { name: "All Books", path: "/user/dashboard", icon: <Home size={20} /> },
    { name: "Upload Book", path: "/user/dashboard/upload-book", icon: <User size={20} /> },
    { name: "Chats", path: "/user/dashboard/all-chats", icon: <LogOut size={20} /> },
    { name: "Settings", path: "/user/dashboard/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="rounded-lg p-6 h-full">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Dashboard</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`flex items-center gap-3 px-3 py-2 rounded transition 
                ${location.pathname === link.path
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"}`}
            >
              {link.icon}
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;