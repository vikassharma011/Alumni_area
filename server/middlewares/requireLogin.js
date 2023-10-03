import jwt from "jsonwebtoken";
//import {Jwt_secret} from "../keys"
import mongoose from "mongoose";
const USER = mongoose.model("USER")

const RequireLogin = (req,res,next)=>{
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "You must have logged in 1" })
    }
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token,"RANDOM", (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "You must have logged in 2" })
        }
        const { _id } = payload
        USER.findById(_id).then(userData => {
            req.user = userData
            console.log(userData);
            next()
        })
    })
}

export default RequireLogin