import { ITaskData } from "@/types/task.types";
import { ITask, Task } from "../model/task";

export const create = async (taskData: ITaskData): Promise<ITask> => {
  try {
    const newTask = new Task(taskData);
    return newTask.save();
  } catch (error) {
    throw new Error(`Error creating task: ${error}`);
  }
};
