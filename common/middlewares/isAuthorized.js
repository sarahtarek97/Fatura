/****Imports****/
//use jwt to decode the token
const jwt = require("jsonwebtoken");

//use .env to get the secret key that I have
require('dotenv').config()
const secretKey = process.env.SECRET_KEY;

//require the Status code to use based on the res
const {StatusCodes} = require('http-status-codes');

//require the rbac to handle the authorization process
const rbac = require('../rbac/rbac');

//export with whatever the endpoint will be passed
module.exports = (endpoint)=>{
    return async (req, res, next) => {
        if (req.cookies.token) {
          //get just the token from the bearer token
          const token = req.cookies.token;
          if (token) {
            try {
              //decode the token
              const decoded = jwt.verify(token, secretKey );
              req.user = decoded;
             //check if the user can perfom that action based on the endpoint passed
              const isAllowed = await rbac.can(decoded.role, endpoint);
              if (isAllowed) {
                next();
              } else {
                res
                  .status(StatusCodes.UNAUTHORIZED)
                  .json({ message: "unauthoraized" });
              }
            } catch (error) {
              res.json({ message: error });
            }
          } else {
            res.status(StatusCodes.UNAUTHORIZED).json({ message: "unauthoraized" });
          }
        } else {
          res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ message: "sign in please" });
        }
    }   
}