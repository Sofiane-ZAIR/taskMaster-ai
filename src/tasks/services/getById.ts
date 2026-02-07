import { ITask, Task } from "../model/task";

export const getById = async (
  id: string,
  ownerId: string
): Promise<ITask | null> => {
  try {
    const task = await Task.findById(id);

    if (!task) {
      throw new Error("Task not found");
    }

    if (task?.owner?.toString() !== ownerId) {
      throw new Error("Unauthorized access to task");
    }

    return task;
  } catch (error) {
    throw new Error(`Error fetching task by id: ${error}`);
  }
};
