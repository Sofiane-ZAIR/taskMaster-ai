import { create } from "./create";
import { getById } from "./getById";
import { getAll } from "./getAll";
import { update } from "./update";
import { deleteTask } from "./delete";

export const taskControllers = {
  create,
  getById,
  getAll,
  update,
  delete: deleteTask,
};
