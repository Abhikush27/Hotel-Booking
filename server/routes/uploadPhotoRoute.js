const express = require('express');
const app = express.Router();
const imageDownloader = require('image-downloader');
const jwt = require('jsonwebtoken')
const multer = require('multer');
// multer is a middleware used to upload the files to the server
const fs = require('fs');
// to rename files on the server we use 'file system' fs
// const photosMiddleware=multer({dest:''});
const Place = require('../models/loginmodel');


// app.post("/upload",photosMiddleware.array('photos',100),async(req,res)=>{
//    try{
//       const uploadedFiles=[];
//       console.log(req.files)
//       for(let i=0;i<req.files.length;i++){
//          const {path,originalname} = req.files[i];
//          const parts = originalname.split('.');
//          const extended = parts[parts.length-1];
//          const newPath = path + '.' + extended;
//          fs.renameSync(path,newPath);
//          uploadedFiles.push(newPath);
//       }
//       res.json(req.files);
//       // res.json(uploadedFiles);

//    }catch(err){
//       console.log(err)
//    }
// })


const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, 'uploads/')
   },
   filename: function (req, file, cb) {
     cb(null, Date.now() + file.originalname)
   }
 })
 
 const photosMiddleware = multer({ storage })


app.post('/places', photosMiddleware.array("photos"),(req,res)=>{

   console.log(req.body)
   console.log(req.files,"files h")

   // const {token} = req.cookies;
//    const {title,address,description,photos,checkIn,checkOut,maxGuests} = req.body;
//    jwt.verify(token,"abhikush", {}, async(err ,userData)=>{
//       if(err) throw err;
// // creating the schema
//       const place = await Place.create({
//          owner:userData.id,
//          title,address,description,photos,
//          checkIn,checkOut,maxGuests,
         
//       })
//       res.json(place);
//    })
return res.json("done")

})
    
module.exports=app;
