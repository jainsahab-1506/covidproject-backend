const Post = require("../HelpSchema/MentalHelp");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User=require("../model")
const  moment  = require("moment");
const getpost=async (req,res)=>{
    try{
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
        const postdata=await Post.find({}).populate("ownerid");
        postdata.reverse();
        console.log(postdata);
        return res.status(200).json(postdata);
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({error:"Server error"});
    }
}
module.exports=getpost;