// Creating Router : define path to resolve various request

const userController= require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')
// 1) import express
const express= require('express');

// 2) create an object for the class Router in Express
const router = new express.Router();

// 3 define paths for resolving request

//1) user registration
router.post('/user/register',userController.register)

//2) user login
router.post('/user/login', userController.login)

//3) add project
router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

//4) get home project
router.get('/project/home-project', projectController.getHomeProjects)

//5) get all project
router.get('/project/all-project', jwtMiddleware, projectController.getAllProjects)

//6) get user project
router.get('/project/user-project', jwtMiddleware, projectController.getUserProject)

// 4) export router

module.exports = router;