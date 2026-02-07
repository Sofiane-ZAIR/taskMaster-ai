import { ITask, Task } from "../model/task";

export const updateTask = async (
  id: string,
  updatedData: Partial<ITask>,
  ownerId: string
): Promise<ITask | null> => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedTask) {
      throw new Error("Task not found");
    }
    if (updatedTask?.owner?.toString() !== ownerId) {
      throw new Error("Unauthorized access to task");
    }

    return updatedTask;
  } catch (error) {
    console.error(`Error updating task: ${error}`);
    return null;
  }
};
