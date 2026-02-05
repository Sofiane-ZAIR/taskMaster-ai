import { Request, Response } from "express";
import { taskServices } from "../services";

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    if (!id) {
      return res.status(400).json({ message: "Task ID is required" });
    }
    const deletedTask = await taskServices.delete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error deleting task", error: error.message });
  }
};
