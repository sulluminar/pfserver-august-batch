// Creating Router : define path to resolve various request

const userController= require('../Controllers/userController')
// 1) import express
const express= require('express');

// 2) create an object for the class Router in Express
const router = new express.Router();

// 3 define paths for resolving request

//1) user registration
router.post('/user/register',userController.register)

//2) user login
router.post('/user/login', userController.login)

// 4) export router

module.exports = router;