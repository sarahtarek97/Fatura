//user mongoose in creating the schema
const mongoose = require('mongoose');

//require bcrypt to help us hash the password
const bcrypt = require('bcrypt');

//create the schema for the user collection
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:[true, 'should enter email']},
    password:{type:String,required:true},
    phone:{type:String},
    role:{type:String,default:'user'},
    verified:{type:Boolean, default:false}
},{
    timestamps:true,
})

//create a hook to hash the password before saving it for security
userSchema.pre('save',async function(next) {
    this.password = await bcrypt.hash(this.password,7);
    next();
})

//export that schema to use it while creating the model
module.exports = userSchema;