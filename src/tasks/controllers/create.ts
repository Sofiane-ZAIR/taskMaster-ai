import { Request, Response } from "express";
import { taskServices } from "../services";

export const create = async (req: Request, res: Response) => {
  try {
    const taskData = req.body as {
      title: string;
      description?: string;
      status?: string;
    };
    if (!taskData?.title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const newTask = await taskServices.create(taskData);
    if (!newTask) {
      return res.status(500).json({ message: "Failed to create task" });
    }
    return res.status(201).json(newTask);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error creating task", error: error.message });
  }
};
