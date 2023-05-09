const mongoose = require('mongoose');
require('dotenv').config();

 const Connect = ()=>{
    mongoose.connect(process.env.MONGOOSEURL).then(()=> console.log("Connected to mongoDB"))
    .catch(err=>console.log(err))
  } 
  
  module.exports = Connect
 