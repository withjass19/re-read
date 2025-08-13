import { useContext } from "react";
import { createContext } from "react";
import { AppContext } from "./AppContext";
import { useState } from "react";
import { useSocket } from "./SocketContext";

const ChatContext = createContext();

export const ChatProvider = ({children}) => {

    const {axios, user} = useContext(AppContext);
    const socket = useSocket().current;

    const [selectedUser, setSelectedUser] = useState(null);
    const [mess, setMess] = useState([]);
    const [chatId, setChatId] = useState(null);

     // Get messages for chatId
     const getMessages = async (chatId) => {
        // console.log("user Chat Id: ",chatId);
        const { data } = await axios.get(`/api/messages/${chatId}`);
        if (data.success) setMess(data.messages);
        return data.messages;
    };

     // Send message
     const sendMessage = async (msg) => {
        await axios.post(`/api/messages/send/${chatId}`, msg);
        // Real-time handled by socket
    };

    const value = {
        getMessages,
        sendMessage,
        selectedUser,
        setSelectedUser,
        mess,
        setMess,
        socket,
        user,
        chatId,
        setChatId
    }

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    )
}


export default ChatContext;