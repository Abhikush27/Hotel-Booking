const express = require('express')
const cors = require('cors');
const app = express();
const cookieParser = require("cookie-parser")
const database= require('./database/database');

const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const profileRoute = require('./routes/UserRouter');
const logoutRoute = require('./routes/logoutRoute');
const uploadPhoto = require('./routes/uploadPhotoRoute');


// "bcrypt" is used to encrypt the password
const bcrypt = require('bcryptjs');
const bcryptSalt= bcrypt.genSaltSync(10);

// const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(express.urlencoded({extended:true}))
// app.use(express.json());
app.use(cookieParser())
app.use("/uploads",express.static(__dirname+"/uploads"))
database();

// "cors" will connect the register page with localhost:7000
app.use(cors({
  credentials: true,
  origin:'http://localhost:3000',
}));

app.use(loginRoute)
app.use(registerRoute)
app.use(profileRoute);
app.use(logoutRoute);
app.use(uploadPhoto);

app.get('/test',function(req,res){
    res.json('tested');
});


app.listen(7000,function(){
    console.log("api created");
});