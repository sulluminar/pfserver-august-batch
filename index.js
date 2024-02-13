// express server creation

// import router.js
const router = require('./Routes/router')
const jwtMiddleware= require('./Middlewares/jwtMiddleware')

// 1) import dotenv
require('dotenv').config()

// 2) import express
const express = require('express')

// import connection
require('./DB/connections')

// 3) import cors
const cors = require('cors')

// 4) create server
const pfServer = express();

// 5) apply corse to the created server
pfServer.use(cors())

// 6) use a middleware called express.json()  to convert json data to javascript Object
pfServer.use(express.json())
// pfServer.use(jwtMiddleware)
pfServer.use(router)

// export uploads folder
//1) first argument is the path that need to be used in front-end
//2) second argumnet is the path of upload folder in server
pfServer.use('/uploads',express.static('./uploads'))

// 7) define port number
const PORT = 4000 || process.env.PORT

// 8) run the server
pfServer.listen(PORT, ()=>{
    console.log(`Server is UP and Running in PORT ${PORT}`);
})

//create a method for get
pfServer.get('/', (req,res)=>{
    res.send("project is running on port 4000")
})

