import express from "express";
import { todoController } from "../controllers/Todo.controller.js";

const router = express.Router();

router.route("/todo").post(todoController.post)
router.route("/todo").get(todoController.get)
router.route("/todo/:id").delete(todoController.del)


export { router }