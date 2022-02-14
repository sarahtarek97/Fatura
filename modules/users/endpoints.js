//generate the endpoint to use in authorization process
const GET_ALL_USERS = 'user:GET_ALL_USERS';
const GET_SINGLE_USER = 'user:GET_SINGLE_USER'
const UPDATE_PROFILE = 'user:UPDATE_PROFILE';
const DELETE_USER = 'user:DELETE_USER';
const LOG_OUT = 'user:LOG_OUT';

//export all these endpoint to use in rbac folder
module.exports = {
    GET_ALL_USERS,
    UPDATE_PROFILE,
    GET_SINGLE_USER,
    DELETE_USER,
    LOG_OUT
};