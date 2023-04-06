const express = require('express');
const app = express.Router();

app.post("/upload-link-photo",(req,res)=>{
    // we will grab the image from the link and upload it in "uploadPhoto" folder
const{link} = req.body;
})
    
module.exports=app;