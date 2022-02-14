

Backend Node-JS
Fatura

This simple project to show some basics on each and every project that show us how to sign up into a website and how I can go through all it’s pages which I mean APIs so I can use it in a secure way to have the max benefit from what this website offers

--------------------------------------------------------------------------------------------------------------------------------------------------------------

What includes?
In this project we’re using some NPM packages to help us using Node functionalities and make our coding faster by using these 3rd part modules, There’re two types dependencies and devDependencies, the different is some of these packages we’re using them just on the developing process we actually don’t need them on the deploy phase but other packages we actually need them all the time.
We’re using for the Dependencies:
    bcrypt 5.0.1,
    dotenv 16.0.0,
    easy-rbac 3.2.0,
    express 4.17.2,
    http-status-codes 2.2.0,
    joi 17.6.0,
    jsonwebtoken 8.5.1,
    mongoose 6.2.1,
    cookie-parser 1.4.6
 And for DevDependencies:
    nodemon 2.0.15

--------------------------------------------------------------------------------------------------------------------------------------------------------------

Usage for each NPM package?
 
   bcrypt:
Use bcrypt two times here first to hash the password as we can’t just store it DB as it is because may anyone has an access to this database see the email and the password so before storing it we hash it and as we know hashing is one way we cannot revert it back, Second while the sign in process when the user sign in with email and password we hash that password to compare it with the hashed one already stored in our database

    dotenv:
Some information should be secured and no one else know it like the port I’m working on it, the connection string that connect my project with DB local or global, if I’m using send email option I should save the email and the password and so on, So while I’m sharing my project with others they shouldn’t see these information that’s why I’m using .env file to store all the important information and once share it or upload it this file stay on my local computer

    easy-rbac:
In the process of authorization and checking if the user have permission to do specific action and by action here we mean API or not, So we’re using this nom package to help us doing that in a clear way instead of using if else on each and every request handler to verify the role and see if that role can do that action or not

    express:
Writing vanilla node is really not helpful and take a lot of time that’s why when we’re using express we can easily build different kind of web apps in a short period of time, also providing us a simple routing for the http requests , also provide a very useful middlewares

    http-status-codes:
As we know each and every http request has status that shows us what happed to that request if it’s OK or there’s an error where’s the error is it on the server or authorization or what?, so using this npm package helps us to know what happed to that http request to know more from the user side what’s wrong or from our side as developer to resolve the issue
  
  joi:
The validation is so important to secure the website and give the user a good experience by saving their data in a correct way because as we know the NoSql database not like Sql each field knows what’s the data going to be stored in it, So we empower our project by make that validation as a middleware the data must go through it if succeeded will go to next if not will ask the user to re-enter that data

    jsonwebtoken:
As we all know token is the most powerful and make it easy for the user to perform specific action after losing in instead of log in if he/she wants to do specific action every time, and with that token we can from our side to check if that user already logged in or need to login again to use more APIs, and here’s the benefit of JWT(jsonwebtoken) help us to generate that token encode it with information I passed and decode it again to get the information  

    mongoose:
When we want to use MongoDB as a database for our project we defiantly need this package to help us creating the connection, model our application data

    cookie-parser:
Use it as a middleware so we can store or remove the token from httpOnly Cookie, use also to make the token more secure not any JavaScrip file can access and use it

    nodemon:
In a real world when we make update on the backend the server should not stop and rerun it again, it’s not make sense so using nodemon in the developing process help us by automatically running the server when we made any change 

--------------------------------------------------------------------------------------------------------------------------------------------------------------

What are the Folders in this project…

In this projects there are 6 main files/folders and of course each folder include another files that what we are going to describe next…

package.json
The file that contain all the project data like the name, version, description, the main file and the scripts, also all the dependencies and dev dependencies packages that we’re using in the whole project
app.js
This is the main file that that connect and run everything, like running the server, initiate the database connection
node_modules
This is one of the most important folder in the project because it contains all libraries downloaded from NPM, but we shouldn’t push it on GitHub or when we share the project with anyone because it take a space, ok so how the project will run without these folders and files?? That’s why package.json is so important and powerful because when we run this comment in terminal “npm install” all the dependancies and dev dependancies will be installed all at once
Modules
This folder used to create all the modules we need like users, groups, blogs…, we can have as many modules as we the business need. Each model contain all what this module need like validation, building the schema and the model, routes with the APIs and how to handle them.

Here in our project there’s just one modules to perform all the CRUD operations we want which is “user” contains 5 folders ( Schema, Model, Joi, Route, Controller and endpoint.js)
Schema: use it to create the schema 
Model: use to create a model from the created schema
Joi: use it to validate the user inputs to match what the schema
Route: use to create the https requested which is the APIs 
Controller: use to handle the route APIs
endpoint.js: use to create endpoint to help us in authorization and permissions validation

Configuration

This folder we use to create the connection between the node(the backend) and the mongo database

Common

This folder we’re creating common files that all our modules will use as these files are general to handle the data coming from the modules


enum: create the role and freeze so it cannot be changed
middleware 
isAuthorized: check if the user is already signed in and has a valid token so we can decode it to give them the needed encoded information
validateRequest: use to handle and validate whatever the schema will enter with Joi
rbac
adminPolicy: define the endpoint the admin have permission to do it
userPolicy: define the endpoint the user have permission to do it
index.js: create the object that hold the role and what it can do by connecting it to adminPolicy and userPolicy
rbac.js: create the object that was created in index.js with rbac to use in authoization process

--------------------------------------------------------------------------------------------------------------------------------------------------------------

APIs…

On this project we’re using seven APIs vary from(get, post, put, delete) to provide us with what we need

In details:
Https GET request to get all the users in our DB, but not everyone can get these data only the admins
Video running the API: https://drive.google.com/drive/folders/1DjQ1Hvis7ucRF1NkWjLPBvwWvIl9v8UO?usp=sharing

Http GET request to get single user that stored in the DB according to the id on the params, but not everyone can get these data only the admins
Video running the API:  https://drive.google.com/drive/folders/1DjQ1Hvis7ucRF1NkWjLPBvwWvIl9v8UO?usp=sharing

Http POST request to sign up which is mean add new user to our DB, we’re here using Joi validation to validate the inputs the user will send in the body to meet what we want
Video running the API: https://drive.google.com/drive/folders/1DjQ1Hvis7ucRF1NkWjLPBvwWvIl9v8UO?usp=sharing

Http POST request to sign in using the email and password to check if this email on our DB or not if not will ask the user to sign up if yes then will check if the password match then generate the token and save it on the httpOnly cookies till the token expired or the user logout, we’re here using Joi validation to validate the inputs the user will send in the body to meet what we want
Video running the API: https://drive.google.com/drive/folders/1DjQ1Hvis7ucRF1NkWjLPBvwWvIl9v8UO?usp=sharing


Http GET request to logout the user from the system by removing the stored token in the cookie
Video running the API: https://drive.google.com/drive/folders/1DjQ1Hvis7ucRF1NkWjLPBvwWvIl9v8UO?usp=sharing


Http DELETE request to delete specific user based on the id passed on the params also use Joi validation to validate that id passed, but not everyone can delete the user only the admins
Video running the API:https://drive.google.com/drive/folders/1DjQ1Hvis7ucRF1NkWjLPBvwWvIl9v8UO?usp=sharing

Http PUT request to update the name for specific user based on the id passed on the params and the name passed on the body, also use Joi validation to validate that id and name passed, but not everyone can update anything as everyone should update its own name only
Video running the API: https://drive.google.com/drive/folders/1DjQ1Hvis7ucRF1NkWjLPBvwWvIl9v8UO?usp=sharing


--------------------------------------------------------------------------------------------------------------------------------------------------------------

My way of thinking…

Any project I create from scratch I think about things in order like at first what I want to do what’s the output, So here I had four main goals:
creating APIs
Authentication
Saving generated Token
Authorization

So first thing I did is intuit the project by implementing the packages listen on the server declare the middleware the will deal with the data will return as a buffer and create my project folder then last thing connect all of that together
Second thing I thought about is the schema of my document and create a model from it to make it easy for me to use then validate the inputs the user will enter to be sure we store exactly what we need 
After that what APIs I need, Then how to handle these http request what packages I use and how
Then one of the most important thing which is authentication how I’m going to force the user to sign in to do anything, so the answer will be by generating the token then save it in the httpOnly cookie so the website can use it once sign in and can remove it when logout so I force the user to sign in again if he logged out or if the token expired to provide more security
The last thing is the authorization process how to authorize that use to perform specific action depend on his role is he/she permitted to perform this action or not and of course I define for each role what can and cannot do using the endpoints


--------------------------------------------------------------------------------------------------------------------------------------------------------------

Left outs?

As for each line of code we need to this about what we want to achieve, what’s the output and a lot of things and we prefer a good quality of the code not a huge project with missing functions and a lot of errors but as you can see in this project it’s just s simple CRUD operations for just one module connected with the database with simple authorization and authentication.
But the question here if we have an extra time what we’re going to add here??
There’re a lot of other logic, NPM packages and ideas not on this project like for example how while working on a collection reference on a value on another collection, Or how to verify the sign up process by sending the verification email to the user email and of course there’re a lot of ideas



--------------------------------------------------------------------------------------------------------------------------------------------------------------

Something I learned in this task

At the end I need to thank you as per your explanation you really love the documentation so I learned not just coding and implementing it is the project but while writing this documentation I found out this is like an index for the project as after seeing it you’ll find it easy to go through my code and run it and you don’t even have to run as I also run each and every API here upload the videos and shared the link: https://drive.google.com/drive/folders/1DjQ1Hvis7ucRF1NkWjLPBvwWvIl9v8UO?usp=sharing

--------------------------------------------------------------------------------------------------------------------------------------------------------------

References 

https://www.npmjs.com
https://blog.logrocket.com/nodemon-tutorial-automatically-restart-node-js-apps-with-nodemon/
https://docs.npmjs.com/cli/v8/configuring-npm/package-json
https://www.tutorialsteacher.com/nodejs/nodejs-modules
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


