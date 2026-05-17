import express from "express"
import { 
    registerUserController, 
    loginUserController, 
    refreshTokenController 
} from "../controller/auth.controller.js"

const router = express.Router()

router.post("/register", registerUserController)
router.post("/login", loginUserController)
router.post("/refresh", refreshTokenController)

export default router
