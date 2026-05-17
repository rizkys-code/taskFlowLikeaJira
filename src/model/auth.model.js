import {db} from "../config/cons.js"

export const registerUser = (email,password,role)=>{
    const sql = "INSERT INTO users (email,password,role) VALUES (?,?,?)"
    return db.execute(sql,[email,password,role])
}

export const findUserByEmail = (email)=>{
    const sql = "SELECT id, email, password, role FROM users WHERE email = ?"
    return db.execute(sql,[email])
}

export const updateRefreshToken = (userId, refreshToken)=>{
    const sql = "UPDATE users SET refresh_token = ? WHERE id = ?"
    return db.execute(sql,[refreshToken, userId])
}

export const findUserByRefreshToken = (refreshToken)=>{
    const sql = "SELECT id, email, password FROM users WHERE refresh_token = ?"
    return db.execute(sql, [refreshToken])
}