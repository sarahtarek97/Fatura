//create the role and freeze so it cannot be changed
const roles = Object.freeze({
    ADMIN: "admin",
    USER: "user",
  });
  
  //export the roles to use in rbac folder
  module.exports = roles