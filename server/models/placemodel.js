const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjetId, ref: "User" },

  title: { type: String },
  address: { type: String },
  description: { type: String },
  photos: { type: [String] },
  chekIn: { type: Number },
  checkOut: { type: Number },
  maxGuests: { type: Number },
});

const PlaceModel = mongoose.model("Place", placeSchema);

module.exports = PlaceModel;
