import { ITask, Task } from "../model/task";

export const getAll = async (): Promise<ITask[]> => {
  try {
    const tasks = await Task.find();
    if (!tasks) {
      throw new Error("No tasks found");
    }
    return tasks;
  } catch (error) {
    throw new Error(`Error fetching tasks: ${error}`);
  }
};
