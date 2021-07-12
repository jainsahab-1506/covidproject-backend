const Post = require("../PostSchema");
const jwt = require("jsonwebtoken");
const User = require("../model");

const deletePost = async (req, res) => {
  try {
    console.log(req.params.id);
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
    if (post.ownerid.toString() != user._id.toString()) {
      return res
        .status(400)
        .json({ err: "You are not authorized to delete this." });
    }
    await Post.deleteOne({ _id: req.params.id });
    return res.status(200).json({ Success: "Deleted Successfully" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ err: err.message });
  }
};

module.exports = deletePost;
