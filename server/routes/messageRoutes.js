// const express = require("express");
// const { getMessages, SendMessages } = require("../controllers/messageController");
// const protect = require("../middlewares/authUser");
// const router = express.Router();

// router.get("/:id", protect, getMessages);
// router.post("/send/:id", protect, SendMessages)

// module.exports = router;

const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authUser');
const { initiateChat, getMessages, sendMessage, getUserChats } = require('../controllers/messageController');

router.post('/initiate', protect, initiateChat);
router.get('/:chatId', protect, getMessages);
router.post('/send/:chatId', protect, sendMessage);
router.get('/user/all', protect, getUserChats);

module.exports = router;