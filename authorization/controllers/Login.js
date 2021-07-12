const User = require("./../model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const login=async (req,res)=>{
    try{
        console.log(req.body);
        const {username,email,password} = req.body;
        const user =await User.findOne({email});
        if(!user)
        {
            return res.status(400).json({err:"User not found"});
        }
        const valid =await bcrypt.compare(password,user.password);
        if(valid)
        {//header payload signature 
            const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
            return res.status(200).json({authtoken:token,profile:user});
        }
        else
        {
            return res.status(400).json({errors:[{msg:"Password doesnt match"}]});
        }
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({error:"Server error"});
    }
}
module.exports=login;