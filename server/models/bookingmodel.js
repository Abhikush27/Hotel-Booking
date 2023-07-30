const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({

    place:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    checkIn:{type:Date, required:true},
    checkOut:{type:Date, required:true},
    phone:{type:String, required:true},
})

const Bookingmodel = mongoose.model('booking', BookingSchema);
module.exports = Bookingmodel;