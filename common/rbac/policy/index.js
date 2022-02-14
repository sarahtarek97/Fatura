/***Imports***/
//get the freezed roles
const roles = require('../../enum/roles');

//get the endpoint for admins and users
const adminPolicy = require('./adminPolicy');
const userPolicy = require('./userPolicy');

//create an object that hold the role with what this role can do
const opts = {
  [roles.ADMIN]: {
    can: adminPolicy,
  },
  [roles.USER]: {
    can: userPolicy,
  }
};

//export the option object to use in rbac file
module.exports = opts