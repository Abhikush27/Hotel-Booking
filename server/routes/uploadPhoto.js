const express = require('express');
const app = express.Router();
const imageDownloader = require('image-downloader')

app.post("/upload-link-photo",async(req,res)=>{
    // we will grab the image from the link and upload it in "uploadPhoto" folder
const{link} = req.body;

await imageDownloader.image({
    url:link,
    dest: __dirname+ '/uploads'
});
res.json(__dirname+'/uploads')
})
    
module.exports=app;