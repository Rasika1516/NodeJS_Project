import mongoose from "mongoose";

const userlogin = new mongoose.Schema({
    userEmail:{
        type:String,
        required: true
    },
    userPass:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true
    }
},{timestamps:true});

export const userLogin = mongoose.model('userLogin',userlogin);