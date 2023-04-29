const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema({
    username:String,
    email:String,
    number:String,
    address:String,
}, {timestamps:true})


const UserModel = mongoose.model('User',UserScheme)

module.exports=UserModel