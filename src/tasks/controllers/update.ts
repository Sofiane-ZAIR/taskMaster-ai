/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ITask } from "../model/task";
import { taskServices } from "../services";

export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const updatedData = req.body as Partial<ITask>;
    const ownerId = (req as any)?.user?.userId as string;

    if (!id || Object.keys(updatedData)?.length === 0) {
      return res.status(400).json({
        message: "Task ID and at least one field to update are required",
      });
    }
    const updatedTask = await taskServices.update(id, updatedData, ownerId);
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json(updatedTask);
  } catch (error: Error | unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Error updating task";
    res
      .status(500)
      .json({ message: "Error updating task", error: errorMessage });
  }
};
