const express = require("express");
const { getMessages, SendMessages } = require("../controllers/messageController");
const protect = require("../middlewares/authUser");
const router = express.Router();

router.get("/:id", protect, getMessages);
router.post("/send/:id", protect, SendMessages)

module.exports = router;