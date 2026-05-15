import { veriFyToken,checkRole } from "../middleware/auth.middleware.js";
import { inserTaskController } from "../controller/task.controller.js";
import express from "express"


const router = express.Router()

router.post("/insertTask", veriFyToken,inserTaskController)

export default router
