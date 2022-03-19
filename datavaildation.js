import Joi from "@hapi/joi"

export const rigistervaildation = (user, password , email) => {
    const schema = Joi.object({
        user :  Joi.string().required(),
        password : Joi.string().pattern( new RegExp('^[a-zA-Z0-9]{3,30}$') ),
        email : Joi.string().email().required(),
    });

    return schema.validate({ user, password , email});
}


export const loginvaildation = (  email, password   ) => {
    const schema = Joi.object({
        password : Joi.string(),
        email : Joi.string().email().required(),
    });
    return schema.validate({ password , email});
}
