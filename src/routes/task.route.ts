import express from 'express';
const router = express.Router();

import {
  updateTaskValidation,
  createTaskValidation,
  deleteTaskValidation,
} from '../middlewares/taskValidation';

import {
  addTask,
  updateTask,
  removeTask,
  getTasks,
} from '../controllers/task.controller';

router.get('/GetTasks', getTasks);
router.post('/AddTask', createTaskValidation, addTask);
router.patch('/UpdateTask', updateTaskValidation, updateTask);
router.delete('/RemoveTask/:id', deleteTaskValidation, removeTask);

// Оставил эндпоинты из исходного апи
router.post('/UpdateTask', updateTaskValidation, updateTask);
router.get('/RemoveTask/:id', deleteTaskValidation, removeTask);

export default router;
