// const mongoose = require("mongoose");

// const messageSchema = new mongoose.Schema({
//     senderId: {
//     type:  mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//    },
//    receiverId: { 
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//    },
//    text: {
//     type: String
//    },
//    image: {
//     type: String
//    },
//    seen: {
//     type: Boolean,
//     default: false
//    }
// }, {timestamps: true});

// module.exports = mongoose.model("Message", messageSchema);
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  chatId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat', required: true },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);