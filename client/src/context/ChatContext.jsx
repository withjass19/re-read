import { useContext } from "react";
import { createContext } from "react";
import { AppContext } from "./AppContext";
import { useState } from "react";


const ChatContext = createContext();

export const ChatProvider = ({children}) => {

    const {axios} = useContext(AppContext);

    const [selectedUser, setSelectedUser] = useState(null);
    const [mess, setMess] = useState([]);

    // function to get messages for selected user
    const getMessages = async (userId) => {
        try {
            const { data } = await axios.get(`/api/messages/${userId}`);
            if (data.success) {
                console.log(data);
                // setMessages(data.messages)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // function to send message to selected user
    const sendMessage = async (messageData) => {
        try {
            const { data } = await axios.post(`/api/messages/send/${selectedUser._id}`, messageData);
            if (data.success) {
                console.log(data)
                // setMessages((prevMessages) => [...prevMessages, data.newMessage])
            }
            else{
                console.log(data.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const value = {
        getMessages,
        sendMessage,
        selectedUser,
        setSelectedUser,
        mess,
        setMess
    }

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    )
}


export default ChatContext;