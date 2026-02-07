import { ITask, Task } from "../model/task";

export const deleteTask = async (
  id: string,
  ownerId: string
): Promise<ITask | null> => {
  try {
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      throw new Error("Task not found");
    }

    if (deletedTask?.owner?.toString() !== ownerId) {
      throw new Error("Unauthorized access to task");
    }

    return deletedTask;
  } catch (error) {
    throw new Error(`Error deleting task: ${error}`);
  }
};
