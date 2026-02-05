import { Router } from "express";
import healthRouter from "./health.route";
import taskRouter from "../tasks/route";

const router = Router();

router.use("/health", healthRouter);
router.use("/tasks", taskRouter);

export default router;
