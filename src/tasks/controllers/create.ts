/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { taskServices } from "../services";
import { ITaskData } from "@/types/task.types";

export const create = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body as {
      title: string;
      description?: string;
    };
    const owner = (req as any).user?.userId || ""; //req.user is populated by authentication middleware

    const taskData: ITaskData = {
      title,
      description,
      owner,
    };

    if (!taskData?.title) {
      return res.status(400).json({ message: "Title is required" });
    }
    if (!taskData?.owner) {
      return res.status(400).json({ message: "Owner is required" });
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
