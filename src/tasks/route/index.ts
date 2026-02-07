import { Router } from "express";
import { taskControllers } from "../controllers";
import { authMiddleWare } from "@/middleware/authMiddleWare";

const { getById, getAll, create, update, delete: deleteTask } = taskControllers;

const taskRouter = Router();

taskRouter.get("/:id", authMiddleWare, getById);
taskRouter.get("/", authMiddleWare, getAll);
taskRouter.post("/", authMiddleWare, create);
taskRouter.put("/:id", authMiddleWare, update);
taskRouter.delete("/:id", authMiddleWare, deleteTask);

export default taskRouter;
