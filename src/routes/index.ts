import { Router } from "express";
import healthRouter from "./health.route";
import taskRouter from "../tasks/route";
import userRouter from "@/user/routes";

const router = Router();

router.use("/health", healthRouter);
router.use("/tasks", taskRouter);
router.use("/users", userRouter);

export default router;
