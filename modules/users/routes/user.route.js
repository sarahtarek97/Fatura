/****Imports****/
//create a sub app from the express for routes
const router = require('express').Router();

//require all the handel functions for each Api
const { getAllUsers, signUp, getSingleUser , deleteUser, updateSingleUser, signIn ,logOut } = require('../controller/user.controller');

//require validate request to validate any Joi schema
const validateRequest = require('../../../common/middlewares/validateRequest');

//require the Joi validation schema I created before 
const { signUpSchema , updateUserSchema, getSingleUserSchema, deleteUserSchema, signInSchema } = require('../Joi/user.joi');

//check with the role in the token if that user has permission to do that action or not
const isAuthorized = require('../../../common/middlewares/isAuthorized');

//require all the endpoint to help in authorization process
const { GET_ALL_USERS, GET_SINGLE_USER ,DELETE_USER ,UPDATE_PROFILE ,LOG_OUT } = require('../endpoints');

/***Api***/
//get all users
router.get('/allUsers',isAuthorized(GET_ALL_USERS),getAllUsers);

//get a user with id passed on url params
router.get('/getSingleUser/:id',validateRequest(getSingleUserSchema),isAuthorized(GET_SINGLE_USER),getSingleUser);

//if I don't have an account so I'll sign up like adding new user to the system
router.post('/signUp',validateRequest(signUpSchema),signUp);

//sign in with email and password to generate token
router.post('/signIn',validateRequest(signInSchema),signIn)

//logout from the system
router.get("/logout",isAuthorized(LOG_OUT),logOut);

//delete user with id passed on the params
router.delete('/deleteUser/:id',isAuthorized(DELETE_USER),validateRequest(deleteUserSchema),deleteUser);

//update my name and I must be already signed in
router.put('/updateUserName/:id',validateRequest(updateUserSchema),isAuthorized(UPDATE_PROFILE),updateSingleUser);

//export the route to use it in the main file app.js
module.exports = router;