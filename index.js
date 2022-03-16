import express from "express";
import jwt from "jsonwebtoken"

import bodyParser from "body-parser"
import req from "express/lib/request";
const app = express();
const port = 4000;


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


const fakeuser = [
    {
        username : "Han",
        password : 123,
    },
    {
        username : "LEE",
        password : 456,
    },
    {
        username : "GEOL",
        password : 789,
    },
]

app.post("/login",(req,res)=>{
    const {username , password} = req.body;
    const ok = fakeuser.find((user)=>{
        return user.password === password || user.username === username
        
    });
    console.log(ok);
    if(ok){
        const token = jwt.sign({ username , password } , "123");
        const auth = req.headers.auth
        
        return res.status(400).send(`${username} , ${password} , ${token}`);
    }else{
        return res.status(404).send("X");
    };
    
});

const middle = () => {
    const auth = req.headers.auth
    if(auth){
       const confirm = auth.split(" ")[1];
       jwt.verify(confirm,"123",(err , user)=>{
           
       })
    }
}

app.use("/",(req,res)=>{
    res.send("시작");
});

// app.use("/confirm",(req,res)=>{
//     const verify = req.headers.auth;

//     if(verify){
//         const token = verify.split(" ")[1];
//         console.log(token);
//     }
// })
app.listen(port,()=>{
    console.log(`app listen localhost::${port}`);
});


