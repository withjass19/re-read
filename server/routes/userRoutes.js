const express = require("express");
const router = express.Router();
const { register, login, isAuth, logout } = require("../controllers/userController");
const protect = require("../middlewares/authUser.js");

router.post("/register", register);
router.post("/login", login);
router.get("/is-auth", protect ,isAuth);
router.get("/logout", protect ,logout);

module.exports = router;