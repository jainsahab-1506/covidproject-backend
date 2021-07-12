const mongoose=require("mongoose");
const User=require("./model");
const postSchema=mongoose.Schema(
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
const Post=mongoose.model('Post', postSchema);//Post->structure postschema

module.exports=Post;