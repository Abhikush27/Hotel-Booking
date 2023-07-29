const express = require('express');
const app = express.Router();


// calling the UserSchema
const User = require('../models/loginmodel');
// "bcrypt" is used to encrypt the password
const bcrypt = require('bcryptjs');
// const bcryptSalt= bcrypt.genSaltSync(10);

const jwt = require('jsonwebtoken');

// app.use(express.json());

app.post('/login', async (req,res) => {
    // mongoose.connect(process.env.MONGO_URL);
    const {email,password} = req.body;
    const userDoc = await User.findOne({email});
    if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
        //  It contains the data you want to include in the token.
        // abhikush is the secret key
        // fourth is the callback fuction executed once the JWT is created
        
        jwt.sign({
          email:userDoc.email,
          id:userDoc._id
        }, 'abhikush', {}, (err,token) => {
          if (err) throw err;
          return res.cookie('token', token).json(userDoc);
        });
      } else {
        res.status(422).json('pass not ok');
      }
    } else {
      res.json('not found');
    }
  });

module.exports=app;