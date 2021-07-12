const mongoose=require("mongoose");
const User=require("../model");
const MedicalHelp=mongoose.Schema(
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
const Medical=mongoose.model('Medicalhelp', MedicalHelp);

module.exports=Medical;