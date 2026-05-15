import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { registerUser, findUserByEmail, updateRefreshToken, findUserByRefreshToken } from "../model/auth.model.js";


export const registerUserService =async (email, password, role)=>{
    const [rows] = await findUserByEmail(email)

    if(rows.length > 0){
        throw new Error("email already exists")
    }

    const hashPasword = await bcrypt.hash(password,10)

    await registerUser ({email, password: hashPasword, role})

    return{
        message: "User Registered Succesfully"
    }
}