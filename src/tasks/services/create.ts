import { ITask, Task } from "../model/task";

export const create = async (taskData: Partial<ITask>): Promise<ITask> => {
  try {
    const task = new Task(taskData);
    return task.save();
  } catch (error) {
    throw new Error(`Error creating task: ${error}`);
  }
};
