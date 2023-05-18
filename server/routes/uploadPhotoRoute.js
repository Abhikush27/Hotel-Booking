const express = require("express");
const app = express.Router();
const imageDownloader = require("image-downloader");
const jwt = require("jsonwebtoken");
const multer = require("multer");
// multer is a middleware used to upload the files to the server
const fs = require("fs");
// to rename files on the server we use 'file system' fs
const Place = require("../models/placemodel");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+ "-" + file.originalname);
  },
});

const photosMiddleware = multer({ storage });


app.post("/places", photosMiddleware.array("photos"), async (req, res) => {
  try{

    const { title, address, description, checkIn, checkOut, maxGuests } =
      req.body;
    console.log(req.body);
    console.log(req.files, "files");
    const photos = req.files.map(file=>{
      return file.destination + file.filename
    })
  
    const { token } = req.cookies;
    const user = jwt.verify(token,"abhikush")
    console.log(user)
      const place = new Place({
        owner:user.id,
        title,
        address,
        description,
        photos,
        checkIn,
        checkOut,
        // price,
        maxGuests,
      });
      await place.save();
      console.log(place)
  
      return res.json(place);
  }catch(err){
    console.error(err)
    return res.status(500).json(err)
  }
});


//TO DISPLAY THE PAGES
app.get("/account/user-places", async (req, res) => {
  
  const { token } = req.cookies;
    const user = jwt.verify(token,"abhikush");
    res.json(await Place.find({owner:user._id}))
});


app.get('/account/places/:id',async (req,res) =>{
  try{
    const {id} = req.params;

    res.json(await Place.findById(id));
  }
  catch(e){
console.log(e);  }  
})

// app.put('/account/places',async (req,res) =>{
//   const { token } = req.cookies;
//   const {id, title,
//     address,
//     description,
//     photos,
//     checkIn,
//     checkOut,
//     maxGuests,} = req.body();
//     const user = jwt.verify(token,"abhikush");
//     const placeDoc = await Place.findById(id);
//     // if(user._id === placeDoc.owner)
//     console.log(user._id);
//     console.log(placeDoc.owner);
// })

app.get('/account/places', async(req,res)=>{
 res.json( await Place.find());
})

module.exports = app;