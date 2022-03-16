import express from "express";
import mongoose from "mongoose";
import {user} from "./routers/user"
import {router} from "./routers/auth"
import dotenv from "dotenv" 
const app = express();
const port = 3001;
dotenv.config();
//DB에 연결
mongoose.connect(process.env.DB_URL,()=>{
    console.log("DB CONNECTed");
});

console.log(process.env.TEST_VALUE);

app.get("/",(req,res)=>{
    res.send("시발되라");
});

app.use("/api/user",router);








app.listen(port,()=>{
    console.log(port);
});


