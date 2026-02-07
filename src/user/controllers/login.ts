import { Request, Response } from "express";
import { userServices } from "../services";
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const user = await userServices.loginUser(email, password);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(200).json({ message: "Login successful", user });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Error logging in";
    res.status(500).json({ message: "Error logging in", error: errorMessage });
  }
};
