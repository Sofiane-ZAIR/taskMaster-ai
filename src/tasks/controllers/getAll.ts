import { Request, Response } from "express";
import { taskServices } from "../services";

export const getAll = async (req: Request, res: Response) => {
  try {
    const tasks = await taskServices.getAll();
    res.status(200).json(tasks);
  } catch (error: Error | unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Error fetching tasks";
    res
      .status(500)
      .json({ message: "Error fetching tasks", error: errorMessage });
  }
};
