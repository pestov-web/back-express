const router = require('express').Router();

const {
  updateTaskValidation,
  createTaskValidation,
  deleteTaskValidation,
} = require('../middlewares/taskValidation');

const {
  addTask,
  updateTask,
  removeTask,
  getTasks,
} = require('../controllers/taskController');

router.get('/GetTasks', getTasks);
router.post('/AddTask', createTaskValidation, addTask);
router.patch('/UpdateTask', updateTaskValidation, updateTask);
router.delete('/RemoveTask/:id', deleteTaskValidation, removeTask);

// Оставил эндпоинты из исходного апи
router.post('/UpdateTask', updateTaskValidation, updateTask);
router.get('/RemoveTask/:id', deleteTaskValidation, removeTask);

module.exports = router;
