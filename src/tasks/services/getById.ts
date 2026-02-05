import { ITask, Task } from "../model/task";

export const getById = async (id: string): Promise<ITask | null> => {
  try {
    const task = Task.findById(id);
    if (!task) {
      throw new Error("Task not found");
    }
    return task;
  } catch (error) {
    throw new Error(`Error fetching task by id: ${error}`);
  }
};
