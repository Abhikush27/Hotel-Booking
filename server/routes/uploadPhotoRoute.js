const express = require('express');
const app = express.Router();
const imageDownloader = require('image-downloader')
const multer = require('multer');
// multer is a middleware used to uupload the files to the server
const fs = require('fs');
// to rename files on the server we use 'file system' fs

const photosMiddleware=multer({des:'uploads/'})
app.post("/upload",photosMiddleware.array('photos',100),(req,res)=>{
   const uploadedFiles=[];
   for(let i=0;i<req.files.length;i++){
      // const {originalname,path} = req.files[i];
      const {originalname} = req.files[i];
      // const parts = originalname.split('.');
      // const extended = parts[parts.length-1];
      // const newPath = path + '.' + extended;
      // fs.renameSync(path,newPath);
      // uploadedFiles.push(newPath.replace('uploads/','.'));
      uploadedFiles.push(originalname);
   }
   res.json(uploadedFiles);
})
    
module.exports=app;