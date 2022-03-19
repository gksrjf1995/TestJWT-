import { Router } from "express";
import verifytoken from "./verfifywebtoken"


export const post = Router();

post.get("/", verifytoken ,(req,res)=>{
    console.log(req.user);
   return res.send(`dsadas + ${req.user._id}`);
});


