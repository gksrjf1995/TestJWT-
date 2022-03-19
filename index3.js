import express from "express";
import mongoose from "mongoose";
import {user} from "./routers/user"
import {router} from "./routers/auth"
import dotenv from "dotenv" 
import {userSchema} from "./model/usermodel"
import {post} from "./routers/post"

////// import 


const app = express();
const port = 3001;
dotenv.config();


app.use(express.json());
app.use("/api/user",router);
app.use("/api/post",post); 
//DB에 연결
mongoose.connect(process.env.DB_URL,()=>{
    console.log("DB CONNECTed");
});

console.log(process.env.TEST_VALUE);

// app.post("/", async (req,res) =>{
//     const newuser = new userSchema({
//         user : "성공",
//     });
//     await newuser.save((err , result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log(result);
//         }
//     });
//    return res.send("dd");
// },{new: true});

app.get("/",(req,res)=>{
    res.send("되라라");
});










app.listen(port,()=>{
    console.log(port);
});


