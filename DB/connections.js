// import mongoose
const mongoose = require('mongoose');

//get connection string from .env
const connectionString= process.env.DATA_BASE;

//connect to mongodb using mongoose
mongoose.connect(connectionString).then((res)=>{
    console.log("MongoDB connected successfully")
}).catch((err)=>{
    console.log(`MongoDB connectipn failed due to ${err}`)
})