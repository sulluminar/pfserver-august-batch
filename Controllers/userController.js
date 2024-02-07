// logic to register
const users = require('../Models/userSchema')
const jwt = require("jsonwebtoken")
// import userSchema

exports.register = async (req, res) => {
    // insert logic
    console.log("Inside userController: register method");
    const { username, email, password } = req.body;
    console.log( username, email, password)
    try {
        // check whether email id is already exist in uder collection
        const existingUser = await users.findOne({ email: email });
        console.log("===existing user===");
        console.log(existingUser)
        if (existingUser) {
            // if user already registered by checking email
            res.status(406).json('Account already exists, Pelase Login')
        }
        else {
            const newUser = new users({
                username: username,
                email: email,
                password: password,
                github: "",
                linkedin: "",
                profile: ""
            })
            await newUser.save();
            res.status(200).json(newUser);

        }
    } catch (err) {
        res.status(401).json("registration request failed due to ", err)
    }
}

exports.login = async (req,res)=>{
    console.log("inside login controller method")
    const {email, password} = req.body;
    try{
        const existingUser = await users.findOne({email:email, password:password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id}, "superscretkey12345");
            console.log(token)
            res.status(200).json({
                existingUser:existingUser,
                token:token
            })
        }
        else{
            res.status(406).json("Invalid email ID or Password")
        }
    }
    catch(err){
        res.status(401).json("Login request failed due to error", err)
    }
}

