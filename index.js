import "dotenv/config"
import express from "express"
import cors from "cors"
import taskRoutes from "./src/routes/task.routes.js"
import authRoutes from "./src/routes/auth.routes.js"

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use("/task", taskRoutes)
app.use("/auth",authRoutes)

app.listen(PORT,()=>{
    console.log(`app listening in http://localhost:${PORT}`)
})