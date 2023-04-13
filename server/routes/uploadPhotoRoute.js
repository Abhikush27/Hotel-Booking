const express = require('express');
const app = express.Router();
const imageDownloader = require('image-downloader')
const multer = require('multer');
// multer is a middleware used to uupload the files to the server

const photosMiddleware=multer({des:'uploads/'})
app.post("/upload",photosMiddleware.array('photos',100),(req,res)=>{
   // app.post('/upload', ph)
   res.json(req.files);
})
    
module.exports=app;