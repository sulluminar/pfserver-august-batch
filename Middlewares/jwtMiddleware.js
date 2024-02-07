
const jwt = require("jsonwebtoken");

const jwtMiddleware = async(req, res, next) => {
    console.log("Verifying token : using JWT middleware");
    const token = req.headers['authorization']
    console.log(token)
    try {
        const jwtResponse = await jwt.verify(token,"superscretkey12345")
        console.log("==jwtResponse==");
        console.log(jwtResponse)
        next();
    } catch (err) {
        res.status(401).json("Authorization failed, Please Login")
    }
    
}
module.exports = jwtMiddleware;