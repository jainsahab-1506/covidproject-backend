const Post = require("../HelpSchema/FinanceHelp");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User=require("../model")
const  moment  = require("moment");
const createpost=async (req,res)=>{
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
        
        const user =await User.findById(tokenData._id);
        console.log(tokenData);
        if(!user){
            return res.status(400).json({error:"Invalid Token"});
        }
        const {message}=req.body;
        var date = moment().format("dddd, MMMM Do YYYY, h:mm a");;  
        const post=new Post({
            message,Date:date,ownerid:user._id
        })
        await post.save();
        console.log(post.Date);
        return res.status(200).json(post);
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({error:"Server error"});
    }
}
module.exports=createpost;