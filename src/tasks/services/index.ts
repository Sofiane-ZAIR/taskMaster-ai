import { create } from "./create";
import { getById } from "./getById";
import { getAll } from "./getAll";
import { deleteTask } from "./delete";
import { updateTask as update } from "./update";

export const taskServices = {
  getAll,
  getById,
  create,
  delete: deleteTask,
  update,
};
