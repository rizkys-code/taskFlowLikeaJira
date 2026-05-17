import { loginUserService, refreshTokenService, registerUserService} from "../service/auth.service.js";
import { success,error } from "../response/response.js";

export const registerUserController = async (req, res)=>{
    try {
        const {email, password, role} = req.body
        const result = await registerUserService(email, password, role)
        return success(res, result, "user registeres succesfuly")
    } catch (err) {
        return error(res,err.message)
    }
}


export const loginUserController = async (req,res)=>{
    try {
        const {email,password} = req.body
        const result = await loginUserService(email, password)
        return success(res, result, "login successfuly")
    } catch (err) {
        return error(res, err.message)
    }
}

export const refreshTokenController = async (req, res) => {
    try {
        const { refreshToken } = req.body
        const result = await refreshTokenService(refreshToken)
        return success(res, result, "Token refreshed successfully")
    } catch (err) {
        return error(res, err.message)
    }
}