const mongoose = require('mongoose');

async function connectMongoDB(){
  try{
    await mongoose.connect('mongodb://localhost:27017/airbnb-login',
      {
        useNewUrlParser: true,
      });
    console.log("connected to DB successfully");

  }catch(err){
    console.log("error in connection with DB",err);
  }
}


  module.exports=connectMongoDB;