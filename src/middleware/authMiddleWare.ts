/* eslint-disable @typescript-eslint/no-explicit-any */
import { verifyToken } from "@/utils/auth";
import { NextFunction, Request, Response } from "express";

export const authMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1]; //Bearer Token
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const payload = verifyToken(token);

    if (!payload) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    (req as any).user = payload;
    next();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: any) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
