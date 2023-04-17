const express = require('express');
const app = express.Router();
const imageDownloader = require('image-downloader');
const jwt = require('jsonwebtoken')
const multer = require('multer');
// multer is a middleware used to upload the files to the server
const fs = require('fs');
// to rename files on the server we use 'file system' fs
const photosMiddleware=multer({dest:'uploads/'});
const Place = require('../models/loginmodel');


app.post("/upload",photosMiddleware.array('photos',100),async(req,res)=>{
   try{
      const uploadedFiles=[];
      console.log(req.files)
      for(let i=0;i<req.files.length;i++){
         const {path,originalname} = req.files[i];
         const parts = originalname.split('.');
         const extended = parts[parts.length-1];
         const newPath = path + '.' + extended;
         fs.renameSync(path,newPath);
         uploadedFiles.push(newPath);
      }
      res.json(req.files);
      // res.json(uploadedFiles);

   }catch(err){
      console.log(err)
   }
})

app.post('/places', photosMiddleware.single('avatar'),(req,res)=>{
   const {token} = req.cookies;
   console.log(req.body)
   const{title,address,description,photos,checkIn,checkOut,maxGuests} = req.body;
   jwt.verify(token,"abhikush", {}, async(err ,userData)=>{
      if(err) throw err;
// creating the schema
      const place = await Place.create({
         owner:userData.id,
         title,address,description,photos,
         checkIn,checkOut,maxGuests,
         
      })
      res.json(place);
   })

})
    
module.exports=app;