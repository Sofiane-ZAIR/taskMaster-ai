import { Router } from "express";
import userControllers from "../controllers";

const { signUp, login } = userControllers;

const userRouter = Router();

userRouter.post("/signUp", signUp);
userRouter.post("/login", login);

export default userRouter;
