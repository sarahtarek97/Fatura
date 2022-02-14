//use Joi to validate the user inputs 
const Joi = require('joi');

//create and export the Joi schema for each and every Api that take input
module.exports = {
    signUpSchema:{
        body: Joi.object().required().keys({
            name: Joi.string().required().messages({
                'string.empty':'sorry name is required',
            }),
            email: Joi.string().required().email().messages({
                'string.email':'sorry enter valid email',
                'string.empty':'sorry email is required',
            }),
            password: Joi.string().required().messages({
                'string.empty':'sorry password is required',
            }),
            phone: Joi.string().required().messages({
                'string.empty':'sorry number is required',
            }),
            role: Joi.string().optional(),
        })
    },
    signInSchema:{
        body:Joi.object().required().keys({
            email: Joi.string().required().email(),
            password: Joi.string().required(),        
        }),
    },
    getSingleUserSchema:{
        params: Joi.object().required().keys({
            id: Joi.string().required().messages({
                'string.empty':'sorry id is required',
            })
        }),
    },
    updateUserSchema:{
        body: Joi.object().required().keys({
            name: Joi.string().required().messages({
                'string.empty':'sorry name is required',
            }),
        }),
        params: Joi.object().required().keys({
            id: Joi.string(),
        }),
    },
    deleteUserSchema:{
        params: Joi.object().required().keys({
            id: Joi.string(),
        }),
    }
}