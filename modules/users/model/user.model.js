//use mongoose in creating the model
const mongoose = require('mongoose');

//require the schema I created before
const userSchema = require('../schema/user.schema');

//create the user model
const User = mongoose.model('user',userSchema);

//export the model to use in controller
module.exports = User;