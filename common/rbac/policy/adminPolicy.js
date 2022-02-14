//import and export all the end points 
const { GET_ALL_USERS, GET_SINGLE_USER, DELETE_USER, UPDATE_PROFILE,LOG_OUT } = require("../../../modules/users/endpoints");


module.exports = [GET_ALL_USERS,GET_SINGLE_USER,DELETE_USER,UPDATE_PROFILE,LOG_OUT]