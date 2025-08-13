/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { dummyProducts } from '../assets/assets';
import axios from 'axios';
import  { io } from 'socket.io-client'

const baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = baseURL;

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
    const navigate = useNavigate();
    // const [user, setUser] = useState(null);
    const [user, setUser] = useState({username: "jass"});
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [socket, setSocket] = useState(null);

    const fetchBooks = async() => {
        // setProducts(dummyProducts);
        const response = await axios.get('/api/books');
        // console.log(response.data);
        setProducts(response.data);
    }

    const fetchUser = async()=>{
        try{
            const {data} = await axios.get('/api/user/is-auth', {
                withCredentials: true
            });
            if(data.success){
                setUser(data.user);
            }
        } catch (error){
            console.log(error.message);
            setUser(null)
        }
    }

     // connect socket function to handle socket connection and online users updates
    const connectSocket = (userData) => {
        if (!userData || socket?.connected) return;
        const newSocket = io(baseURL, {
            query: {
                userId: userData._id
            }
        });
        newSocket.connect();
        setSocket(newSocket);

        newSocket.on("getOnlineUsers", (userId)=>{
            setOnlineUsers(userId);
        })
    }

    useEffect(()=>{
        fetchUser();
        fetchBooks();
    }, []);

    const value = {
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        products,
        axios,
        connectSocket,
        socket, setSocket,
        onlineUsers, setOnlineUsers
    };
    
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext);
}