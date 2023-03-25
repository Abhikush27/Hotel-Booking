const express = require('express');
const {verify} = require('../middleware/verify');
const app = express.Router();
const UserModel = require('../models/loginmodel')

app.get('/profile',verify,async(req,res)=>{
    try{
        const user = await UserModel.findById(req.user.id)
        if(!user){
            return res.json("user not found")
        }
        return res.json(user)
    }catch(err){
        console.log(err)
        return res.json({msg:"error profile"})
    }
})

module.exports = app