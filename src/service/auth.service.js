import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { registerUser, findUserByEmail, updateRefreshToken, findUserByRefreshToken } from "../model/auth.model.js";


export const registerUserService =async (email, password1, role)=>{
    const [rows] = await findUserByEmail(email)

    if(rows.length > 0){
        throw new Error("email already exists")
    }

    const hashPasword = await bcrypt.hash(password1,10)

    await registerUser (email, hashPasword, role)

    return{
        message: "User Registered Succesfully"
    }
}

export const loginUserService = async (email, password)=>{
    const [rows] = await findUserByEmail(email)

    if(rows.length === 0){
        throw new Error("user Not Found") 
    }
    const user = rows[0]

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error ("email or password incorect")
    }

    const token = jwt.sign({
        id: user.id,
        email: user.email,
        role: user.role
    },process.env.JWT_SECRET,{
        expiresIn:"2h"
    })


    const RefreshToken = jwt.sign({
        id: user.id,
        email: user.email
    },process.env.JWT_REFRESH_SECRET,{
        expiresIn:"7d"
    })

    await updateRefreshToken(user.id, RefreshToken)

    return{
        token, RefreshToken
    }
}


export const refreshTokenService = async (refreshToken)=>{
    const [result] = await findUserByRefreshToken(refreshToken)
    if(result.length === 0){
        throw new Error ("User not found in db")
    }
    const user = result[0]
    try {
        jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)
    } catch (error) {
        throw new Error("Refresh token expires or invalid")
    }

    const newAccesToken = jwt.sign({id: user.id, email: user.email},process.env.JWT_SECRET,{expiresIn: "2h"})

    return{
        token: newAccesToken
    }
}


