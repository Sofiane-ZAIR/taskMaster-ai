/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { taskServices } from "../services";

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const ownerId = (req as any)?.user?.userId as string;

    if (!id) {
      return res.status(400).json({ message: "Task ID is required" });
    }

    const deletedTask = await taskServices.delete(id, ownerId);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error: Error | unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Error deleting task";
    res
      .status(500)
      .json({ message: "Error deleting task", error: errorMessage });
  }
};
