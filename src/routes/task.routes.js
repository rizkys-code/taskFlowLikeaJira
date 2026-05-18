import { veriFyToken} from "../middleware/auth.middleware.js";
import { inserTaskController, getTaskController} from "../controller/task.controller.js";
import express from "express"


const router = express.Router()

router.post("/insertTask", veriFyToken,inserTaskController)
router.get("/getTask",veriFyToken,getTaskController)

export default router
