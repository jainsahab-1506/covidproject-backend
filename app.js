const express=require('express')//controller
const bodyparser=require('body-parser')//format change
const mongoose=require('mongoose')//handle database
require("dotenv").config();
const app=express();
const cors=require('cors');
const AuthRouter=require("./authorization/Routes");
app.use(bodyparser.urlencoded({extended:true}))//

mongoose.connect("mongodb+srv://arpanjain:"+process.env.CLUSTER_PASSWORD+ "@cluster0.zezkw.mongodb.net/mernstack?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true })
 app.use(
    cors({
      origin: process.env.SITE_URL,
      optionsSuccessStatus: 200,
    })
  );
  app.use(express.json());
  app.use(bodyparser.json());//
  app.get("/",function(req,res){
    res.send("Hello")
  })//
  app.use("/",AuthRouter);
app.listen(8000,function(req,res){
  console.log("Running")
})