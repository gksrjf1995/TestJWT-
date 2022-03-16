import { Router } from "express";

export const router =  Router();

router.get("/",(req,res)=>{
    res.send("미칠거같아 ㅋ");
});

router.get("/register",(req,res)=>{
    res.send("register");
});

router.post("/login");

