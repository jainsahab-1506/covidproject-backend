const User = require("../model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const subscribe = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(400).json({
        error: "Invalid request headers.",
      });
    }
    var tokenData = authHeader.split(" ")[1];
    console.log({ tokenData });
    if (!tokenData) {
      return res.status(400).json({
        error: "Invalid token.",
      });
    }
    tokenData = jwt.decode(tokenData);
    console.log(tokenData);
    const user = await User.findById(tokenData._id);
    if (!user ) {
      return res.status(400).json({ error: "Invalid Token" });
    }
    
    user.subscribe = !user.subscribe;
    const updatedUser = await User.findOneAndUpdate({ _id: user._id }, user);
    return res.status(200).json({ profile: updatedUser });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server error" });
  }
};
module.exports = subscribe;
