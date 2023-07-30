const express = require("express");
const app = express.Router();
const Bookings = require('../models/bookingmodel');

app.post('/booking',async (req,res)=>{
    const {checkIn,checkOut,phone,Guests} = req.body;

    // Bookings.create({
    //     checkIn,checkOut,phone,Guests
    // }).then((doc)=>{
    //     res.json(doc)
    // }).catch((err)=>{
    //     throw err;
    // })

    try{
         const bookingdoc = await Bookings.create({
             checkIn,checkOut,phone,Guests
         });
        
            res.json(userDoc);
        }
        catch(e){
        res.status(422).json(e);
        }

})