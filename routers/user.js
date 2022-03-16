import { Router } from "express";




export const user = Router();


user.get("/routes/auth",(req,res)=>{
    res.send("씨발dd");
});


