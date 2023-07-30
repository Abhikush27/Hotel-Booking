const express = require("express");
const router = express.Router();
const Bookings = require('../models/bookingmodel');
const jwt = require("jsonwebtoken");

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized. Token missing." });
  }
  try {
    const user = jwt.verify(token, "abhikush");
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
}

// POST /bookings route to create a new booking
router.post("/booking", verifyToken, async (req, res) => {
  const { checkIn, checkOut, phone, Guests, place } = req.body;

  try {
    const bookingdoc = await Bookings.create({
      checkIn,
      checkOut,
      phone,
      Guests,
      place,
      owner: req.user._id,
    });

    res.json(bookingdoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

// GET /bookings route to fetch user's bookings
router.get("/bookings", verifyToken, async (req, res) => {
  try {
    const bookings = await Bookings.find({ owner: req.user._id });
    res.json(bookings);
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
