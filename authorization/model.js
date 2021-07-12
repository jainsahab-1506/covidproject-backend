const mongoose=require('mongoose');

const userSchema=mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        username:{
            type: String,
            required:true
        },
        phone:{
            type: String,
            required:true
        },
        password:{
            type: String,
            required:true
        },
        subscribe:{
            type:Boolean,
            default:false,
        },
        admin:{
            type:Boolean,
            default:false
        }
    }
)
const User=mongoose.model('User', userSchema);

module.exports=User;