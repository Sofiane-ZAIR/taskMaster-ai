/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from "express";
import { taskServices } from "../services";

export const getById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const ownerId = (req as any)?.user?.userId as string;

    if (!id) {
      return res.status(400).json({ message: "Task ID is required" });
    }
    const task = await taskServices.getById(id, ownerId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error: Error | unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Error fetching task";
    res
      .status(500)
      .json({ message: "Error fetching task", error: errorMessage });
  }
};
