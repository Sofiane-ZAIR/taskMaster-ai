import { Request, Response } from "express";
import { taskServices } from "../services";

export const getAll = async (req: Request, res: Response) => {
  try {
    const tasks = await taskServices.getAll();
    res.status(200).json(tasks);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error fetching tasks", error: error.message });
  }
};
