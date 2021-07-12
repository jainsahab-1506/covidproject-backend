const mongoose=require("mongoose");
const User=require("../model");
const FinanceHelp=mongoose.Schema(
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
const Finance=mongoose.model('Financehelp', FinanceHelp);

module.exports=Finance;