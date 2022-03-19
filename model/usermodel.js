import string from "@hapi/joi/lib/types/string";
import mongoose from "mongoose";
import cryptoJs from "crypto-js";


const userSchmaSetting = new mongoose.Schema({
    user : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    date : {
        type: Date,
        default : Date.now
    },
    email : {
        type: string,
        required : true,
    }
});



export default mongoose.model("userSchema",userSchmaSetting);