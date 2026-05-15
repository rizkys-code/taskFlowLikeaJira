import jwt from "jsonwebtoken"
import { error } from "../response/response.js"

export const veriFyToken = (req,res,next)=>{
    const authHeader = req.headers.authorization
        if(!authHeader){
            return error (res,"No Token Provided")
        }
            const token =  authHeader.split(" ")[1]
        try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET )

            req.user=decoded

            next()
        } catch (err) {
            return error(res,"Invalid Token")
        }
}

export const checkRole = (...allowedRoles)=>{
    return(req,res,next)=>{
        if(!req.user){
            return error (res, "Unauthorized")
        }
        if(!allowedRoles.includes(req.user.role)){
            return error (res,"acces denied")
        }
        next()
    }
}