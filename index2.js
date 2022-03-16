import express from "express";
import jwt from "jsonwebtoken";

import {Users} from "./user"

const app = express();

app.use(express.json());

const fakeUser = [
    {
        id : "1",
        username : "Han",
        password : "Han1",
        isAdmin : false,
    },
    {
        id : "2",
        username : "Gelo",
        password : "Gelo1",
        isAdmin : true,
    }

]

app.post("/test",(req,res)=>{
    const {username} = req.body
    const Userfind = fakeUser.find((item)=>{
        return item.username === username
    });
    if(Userfind){
        res.send(username)
    }else{
        res.send("X");
    }
})
app.post("/login",(req,res)=>{
    const { password ,id } = req.body
    const users = fakeUser.find((usertarget)=>{
        return usertarget.id === id && usertarget.password === password;
    });
    if(users){
        const asstoken = jwt.sign({
          
            isAdmin : users.isAdmin ,   
            username : users.username,
        },"gksrjf");
        

        return res.send(`username ${users.username},
            password ${users.password},
            ${asstoken}
        `);
    }
    
});

app.get("/",(req,res)=>{
    res.json(Users);
});


const verify = (req , res , next) =>{
    const authHeader = req.headers.auth;
    if(authHeader){
        console.log(authHeader);
        const token = authHeader.split(" ")[1];
        console.log(token);
        jwt.verify(token,"gksrjf", (err , user)=>{
            if(err){
                return res.send(err);
            }
            req.user = user;
           
            next();
        });
    }
    
}

app.delete("/api/user/:userId", verify , (req , res) =>{
    if(req.user.username === req.params.userId || req.user.isAdmin ){
        res.send("user delete"+ req.user.username);
    }else{
        res.send("you can't delete this your");
    }
});

app.listen(5000,(req,res)=>{
    console.log("app listen port 5000");
});