const Post = require("../PostSchema");
const jwt = require("jsonwebtoken");
const User = require("../model");

const EditPost = async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body.message);
    const authHeader = req.headers.authorization;
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(400).json({
        error: "Invalid request headers.",
      });
    }
    var tokenData = authHeader.split(" ")[1];

    if (!tokenData) {
      return res.status(400).json({
        error: "Invalid token.",
      });
    }
    tokenData = jwt.decode(tokenData);
    const user = await User.findById(tokenData._id);
    if (!user) {
      return res.status(400).json({ error: "Invalid Token" });
    }
    console.log(req.body);
    const post = await Post.findById(req.params.id);
    if (post.ownerid.toString() !== user._id.toString()) {
      return res
        .status(400)
        .json({ err: "You are not authorized to update this." });
    }
    await Post.findOneAndUpdate(
      { _id: req.params.id },
      { message: req.body.message }
    );
    return res.status(200).json({ Success: "Edited Successfully" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ err: err.message });
  }
};

module.exports = EditPost;
