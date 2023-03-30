const express = require('express');
const app = express.Router();
const jwt = require('jsonwebtoken');

app.post('/logout',(req,res)=>{
    res.cookie('token','').json(true);
});

module.exports=app;