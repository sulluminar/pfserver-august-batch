
const jwt = require("jsonwebtoken");

const jwtMiddleware = (req, res, next) => {
    console.log("Verifying token : using JWT middleware");
    const token = req.headers['authorization'].split(' ')[1]
    console.log(token)
    try {
        const jwtResponse = jwt.verify(token,"superscretkey12345")
        console.log("==jwtResponse==");
        console.log(jwtResponse)
        req.payload = jwtResponse.userId;
        next();
    } catch (err) {
        res.status(401).json("Authorization failed, Please Login")
    }
    
}
module.exports = jwtMiddleware;