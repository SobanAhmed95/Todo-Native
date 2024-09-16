import express from "express";
import cors from "cors"
import { router } from "./routes/Todo.router.js";
const app = express();

app.use(cors({
    origin: process.env.CORS_ORGIN,
}))
app.use(express.json());

app.use("/api/v1",router)
export { app }


