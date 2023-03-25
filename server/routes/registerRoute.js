const express = require('express');
const app = express.Router();

// calling the UserSchema
const User = require('../models/loginmodel');

const bcrypt = require('bcryptjs');
const bcryptSalt= bcrypt.genSaltSync(10);

// app.use(express.json());

app.post('/register',async function(req,res){
    const{name,email,password} = req.body;

    try{
const userDoc = await User.create({
    name,
    email,
    password:bcrypt.hashSync(password, bcryptSalt),
});

    res.json(userDoc);
}
catch(e){
res.status(422).json(e);
}
})

module.exports = app;