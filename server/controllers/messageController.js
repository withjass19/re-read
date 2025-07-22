// get all users except the logged in user
// exports.getUsersForSidebar

const message = require("../models/message");
const User = require("../models/User");

// get all messages for selected user
exports.getMessages = async (req, res) => {
  try {
    const sellerId = req.params.id;
    const myId = res.locals.userId; //myId
    // console.log(sellerId);

    const sellerInfo = await User.findById(sellerId).select("-password");
    // console.log(sellerInfo);

    const messages = await message.find({
      $or: [
        { senderId: myId, receiverId: sellerId },
        { senderId: sellerId, receiverId: myId },
      ],
    });

    await message.updateMany(
      { senderId: sellerId, receiverId: myId },
      { seen: true }
    );

    res.json({ success: true, messages, seller: sellerInfo });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Send message to selected User
exports.SendMessages = async (req, res) => {
  try {
    const { text } = req.body;
    const receiverId = req.params.id; // resever
    const senderId = res.locals.userId; //sender

    // console.log(receiverId);
    // console.log(senderId);

    const newMessage = await message.create({
      senderId,
      receiverId,
      text,
    });

    const receiverSocketId = userSocketMap[receiverId];
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.json({ success: true, newMessage });
    // console.log(text);
    // res.json({ success: true, newMessage: text})
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
