const mongoose=require("mongoose");
const User=require("../model");
const mentalHelp=mongoose.Schema(
    {
      
        message:{
            type: String,
            required:true
        },
        Date:{
            type: String,
            required:true
        },
        ownerid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
        }
    }
)
const mental=mongoose.model('mentalHelp', mentalHelp);

module.exports=mental;