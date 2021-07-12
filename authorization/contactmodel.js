const mongoose=require('mongoose');

const ContactSchema=mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        name:{
            type: String,
            required:true
        },
        phone:{
            type: String,
            required:true
        },
        message:{
            type: String,
            required:true
        }
    }
)
const Contact=mongoose.model('Contact', ContactSchema);

module.exports=Contact;