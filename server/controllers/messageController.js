// // get all users except the logged in user
// // exports.getUsersForSidebar

// const message = require("../models/message");
// const User = require("../models/User");

// // get all messages for selected user
// exports.getMessages = async (req, res) => {
//   try {
//     const sellerId = req.params.id;
//     const myId = res.locals.userId; //myId
//     // console.log(sellerId);

//     const sellerInfo = await User.findById(sellerId).select("-password");
//     // console.log(sellerInfo);

//     const messages = await message.find({
//       $or: [
//         { senderId: myId, receiverId: sellerId },
//         { senderId: sellerId, receiverId: myId },
//       ],
//     });

//     await message.updateMany(
//       { senderId: sellerId, receiverId: myId },
//       { seen: true }
//     );

//     res.json({ success: true, messages, seller: sellerInfo });
//   } catch (error) {
//     console.log(error.message);
//     res.json({ success: false, message: error.message });
//   }
// };

// // Send message to selected User
// exports.SendMessages = async (req, res) => {
//   try {
//     const { text } = req.body;
//     const receiverId = req.params.id; // resever
//     const senderId = res.locals.userId; //sender

//     // console.log(receiverId);
//     // console.log(senderId);

//     const newMessage = await message.create({
//       senderId,
//       receiverId,
//       text,
//     });

//     const receiverSocketId = userSocketMap[receiverId];
//     if (receiverSocketId) {
//       io.to(receiverSocketId).emit("newMessage", newMessage);
//     }

//     res.json({ success: true, newMessage });
//     // console.log(text);
//     // res.json({ success: true, newMessage: text})
//   } catch (error) {
//     console.log(error.message);
//     res.json({ success: false, message: error.message });
//   }
// };
const Chat = require("../models/Chat");
const Message = require("../models/Message");

// 1. Initiate Chat (buyer, seller, book)
// exports.initiateChat = async (req, res) => {
//   try {
//     const { buyerId, sellerId, bookId } = req.body;
//     let chat = await Chat.findOne({ buyerId, sellerId, bookId });
//     if (!chat) {
//       chat = await Chat.create({ buyerId, sellerId, bookId });
//     }
//     res.json({ chatId: chat._id, success: true });
//   } catch (error) {
//     res.json({ message: error.message, success: false });
//   }
// };
exports.initiateChat = async (req, res) => {
  try {
    const { buyerId, sellerId, bookId } = req.body;
    let chat = await Chat.findOne({ buyerId, sellerId, bookId });
    let isNew = false;
    
    if (!chat) {
      chat = await Chat.create({ buyerId, sellerId, bookId });
      isNew = true;
    }
    
    res.json({ 
      chatId: chat._id, 
      isNew,
      success: true 
    });
  } catch (error) {
    res.json({ message: error.message, success: false });
  }
};

// 2. Get all messages for a chat
exports.getMessages = async (req, res) => {
  const { chatId } = req.params;
  const messages = await Message.find({ chatId }).sort({ timestamp: 1 });
  res.json({ success: true, messages });
};

// 3. Send a message (save to DB)
exports.sendMessage = async (req, res) => {
  const { chatId } = req.params;
  const { senderId, receiverId, text } = req.body;
  const message = await Message.create({ chatId, senderId, receiverId, text });
  res.json({ success: true, newMessage: message });
};

// 4. Get all chats for a user
exports.getUserChats = async (req, res) => {
  try {
    const userId = req.user?._id || res.locals.userId;
    
    // सभी chats लाओ (भले ही message न हो)
    const chats = await Chat.find({
      $or: [{ buyerId: userId }, { sellerId: userId }]
    })
      .populate('buyerId', 'name profileImage')
      .populate('sellerId', 'name profileImage')
      .populate('bookId', 'bookName imageUrl');

    res.json({ success: true, chats });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
