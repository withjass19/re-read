import React, { createContext, useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const baseURL = import.meta.env.VITE_BACKEND_URL;
// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = baseURL;

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const socket = useRef();

  useEffect(() => {
    socket.current = io(baseURL, {
      withCredentials: true, // cookies ke liye
    });
    return () => {
      socket.current.disconnect();
    };
  }, []);

  

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);