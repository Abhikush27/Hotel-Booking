const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
  // owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  title: { type: String },
  address: { type: String },
  description: { type: String },
  photos: { type: [String] },
  checkIn: { type: Number },
  checkOut: { type: Number },
  // price:{type:Number},
  maxGuests: { type: Number },
 
});

const PlaceModel = mongoose.model("Place", placeSchema);

module.exports = PlaceModel;
