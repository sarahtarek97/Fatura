//require mongoose to use the mongo DB
const mongoose = require('mongoose');

//create connection with mongo DB also use the .env stored info for the connection string
 const connection = ()=>{
     return mongoose.connect(process.env.CONNECTION_STRING).then((result)=> console.log('db is connected')).catch((err)=>console.log(err))
 };

 //export that connection to invoke it on the main file app.js
 module.exports = connection;