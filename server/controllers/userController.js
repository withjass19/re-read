const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const cloudinary = require('../config/cloudinary');

exports.register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    // console.log(name, email, phone, password);

    // Check for existing user
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "User with this email or phone already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // console.log(hashedPassword)

    // Create new user
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    const newuser = await newUser.save();

    // console.log(newuser);

    // Generate JWT Token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ message: "User registered successfully" });

    // res.status(201).json({
    //   msg: "User registered successfully",
    //   token,
    //   user: {
    //     id: newUser._id,
    //     name: newUser.name,
    //     email: newUser.email,
    //     phone: newUser.phone,
    //   },
    // });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error during sign up" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ msg: "All fields are required" });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        username: user.name,
        phone: user.phone,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ Include username in the response
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signin error:", err.message);
    res.status(500).json({ msg: "Server error" });
  }
};

// /api/user/is-auth
// exports.isAuth = async (req, res) => {
//   try {
//     const { userId } = req.body;
//     console.log(userId);

//     const user = await User.findById(userId).select("-password");
//     return res.json({ success: true, user });
//   } catch (error) {
//     console.log(error.message);
//     res.json({ success: false, message: error.message });
//   }
// };
exports.isAuth = async (req, res) => {
  try {
    const userId = res.locals.userId; // ✅ safer and correct
    // console.log(userId);
    const user = await User.findById(userId).select("-password");
    // console.log(user);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    return res.json({ success: true, user });
  } catch (error) {
    console.log("isAuth error:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};


// Logout User: /api/user/logout
exports.logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      // secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    return res.json({ success: true, message: "Logged Out" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
