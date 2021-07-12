const Contact = require("./../contactmodel");

const contact=async (req,res)=>{
    try{
        console.log(req.body);
        const {name,phone,email,message} = req.body;
        const contact = new Contact({
            name,
            phone,
            email,
            message
        });
        await contact.save();
        return res.status(200).json({contact});
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({error:"Server error"});
    }
}
module.exports=contact;