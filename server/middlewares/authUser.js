const jwt = require("jsonwebtoken");
// const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    const {token} = req.cookies;
    // console.log("Token received:", token); 

    if (!token) return res.status(401).json({ success: false, msg: "No Authorized" });
    // const token = req.header("Authorization")?.split(" ")[1];
    // if (!token) return res.status(401).json({ msg: "No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded Token:", decoded);
    
    // if(decoded.id){
    //   const userId = decoded.id
    //   console.log("Decoded Token:", userId);
    // }
    // req.user = await User.findById(decoded.id).select("-password");
    if(decoded.id){
      res.locals.userId = decoded.id;
        // res.body.userId = decoded.id;
        // console.log( res.locals.userId);
        next();
    }
    else{
        return res.json({ success: false, msg: "No Authorized" });
    }
    // next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = protect;