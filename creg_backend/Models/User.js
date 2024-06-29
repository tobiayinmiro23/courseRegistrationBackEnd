const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    userName:{
        unique:true,
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    matricNumber:{
        type:String,
        // required:true
    },
    photoUrl:{
        type:String,
        default:null
    },
    

});
const User = mongoose.model('User', UserSchema);
module.exports = User
