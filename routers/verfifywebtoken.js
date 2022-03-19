import jwt from "jsonwebtoken";

const verifytoken = (req,res,next) => {
    const tokenconfirm =  req.header('authtoken');
   
    if(!tokenconfirm){
        return res.send("you have not token");
    }
    try{
        const verfi = jwt.verify(tokenconfirm,process.env.SECRET_TOKEN);
        req.user = verfi;
        console.log(verfi);
        next();
    }catch(err){
        return res.send(err);
    }
}

export default verifytoken
