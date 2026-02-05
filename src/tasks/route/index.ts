import { Router } from "express";
import { taskControllers } from "../controllers";

const { getById, getAll, create, update, delete: deleteTask } = taskControllers;

const taskRouter = Router();

taskRouter.get("/:id", getById);
taskRouter.get("/", getAll);
taskRouter.post("/", create);
taskRouter.put("/:id", update);
taskRouter.delete("/:id", deleteTask);

export default taskRouter;
