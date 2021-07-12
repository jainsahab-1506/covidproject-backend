const User = require("./../model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const register=async (req,res)=>{
    try{
        console.log(req.body);
        const {username,email,password,phone} = req.body;
        const user1 =await User.findOne({email});
        console.log(user1);
        if(user1)
        {
            return res.status(400).json({err:"User already exist."});
        }
        const password1 = await bcrypt.hash(password,12);
        const user = new User({
            username,
            email,
            password:password1,
            phone
        });
        await user.save();
        const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
        return res.json({authtoken:token,profile:user});
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({error:"Server error"});
    }
}
module.exports=register;