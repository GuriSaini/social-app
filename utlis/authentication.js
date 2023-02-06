const User = require("../model/UserModel");
const { decodeToken } = require("./jwt");

async function requiredToken(req,res,next){
    try {
        const token = req.headers.authorization
        if(!token) throw new Error("token is required")
        const splitToken = token.split(" ");
        const isBearer = splitToken.includes("Bearer");
        if(!isBearer) throw new Error("Invaild token format");
        const decodetoken = await decodeToken(splitToken[1])
        const isCheckUser = await User.findById(decodetoken.data._id)
        if(!isCheckUser) throw new Error ("Invaild token / Expire")
        if(isCheckUser.isBlock == "1") throw new Error("Blocked by admin")
        req.user = {id:isCheckUser._id}

        next();

    } catch (error) {
        return res.status(400).json({
            status: false,
            message: error.message,
          });
    }
   
}

exports.requiredToken = requiredToken