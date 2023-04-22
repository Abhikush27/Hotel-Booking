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
app.get("/account/places", async (req, res) => {
  
  const { token } = req.cookies;
    const user = jwt.verify(token,"abhikush");
    res.json(await Place.find({owner:user._id}))
});

module.exports = app;
