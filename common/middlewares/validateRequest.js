//require the Status code and a message to use based on the res
const {StatusCodes,getReasonPhrase} = require('http-status-codes');

//export with whatever the schema will enter with Joi to handle it
module.exports = (schema) => {
    return (req, res, next) => {
      const validations = [];
      //handle whaever the user will enter the data in params or body .....
      ['headers','params','query','body','file'].forEach((key)=>{
        if(schema[key]){
          const validation = schema[key].validate(req[key]);
          if(validation.error){
            validations.push(
              validation.error.details[0].message.split('"').join(""))
          }
        }
      })
      //if there's an error
      if (validations.length) {
        res.status(StatusCodes.BAD_REQUEST).json({
          message: `Validation : ${validations.join()}`,
          error: getReasonPhrase(StatusCodes.BAD_REQUEST),
        });
        return;
      }else{
        //if there's no error then go to next
        next();
      } 
    };
  };