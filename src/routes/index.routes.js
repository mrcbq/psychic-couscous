import { Router } from "express";

import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  toggleTask,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTasks);

router.get("/task/:id/toggleDone", toggleTask);

router.post("/tasks/add", createTask);

router.get("/task/:id/edit", renderTaskEdit);

router.post("/task/:id/edit", editTask);

router.get("/task/:id/delete", deleteTask);

export default router;
