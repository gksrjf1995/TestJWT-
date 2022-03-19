import { Router } from "express";
import userSchema from "../model/usermodel"
import {rigistervaildation , loginvaildation} from "../datavaildation"
import jwt from "jsonwebtoken";
import CryptoJS  from "crypto-js";
import verifytoken from "./verfifywebtoken"

export const router =  Router();







router.get("/register",(req,res)=>{
    return res.send("제발");
});



router.post("/register"  ,  async (req,res)=>{
    
    //사용자가 입력한 body
    const  {user , password  , email} = req.body

    //레지스털 데이터 유효성 검사
    const error =  rigistervaildation( user , password  , email);

    
    //email 및 user 중복 확인
    const existUser = await userSchema.findOne({email});
    if(existUser){
        res.send("User email already Exist");
    }

    //패스워드 암호화
    const enpassword = CryptoJS.AES.encrypt(password,"123").toString();
    

    //모든 과정 통과시 계정 생성
    const NewUser = new userSchema({
        user ,
        password : enpassword,
        email ,
    });
    try{
        console.log(NewUser);
        await NewUser.save();
        return res.send(NewUser);
    }catch(err){
        return res.status(400).send(error?.error?.details[0].message);
    }
});

router.post("/login" , async(req,res)=>{
    const {email , password} = req.body
    const error =  loginvaildation( email , password   );


    if(error?.error?.details[0].message){
        res.send(error?.error?.details[0].message);
    }
    


    const findUser = await userSchema.findOne({email});
    if(!findUser){
        return res.send("your email noth exist");
    }

    let bytes  = CryptoJS.AES.decrypt(findUser.password, "123");
    let originalText = bytes.toString(CryptoJS .enc.Utf8); 
    console.log(findUser);       
    if(originalText === password){

        //json token
        const token = jwt.sign({
            _id : findUser._id,
            user : findUser.user,
        },process.env.SECRET_TOKEN);
        return res.header('authtoken',token).send(token);
    }
    
    
});

