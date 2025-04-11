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
// Странная реализация в исходом апи, заменил ниже на PATCH, этот тоже оставил
router.post('/UpdateTask', updateTaskValidation, updateTask);
// Странная реализация в исходом апи, заменил ниже на DELETE, этот тоже оставил
router.get('/RemoveTask/:id', deleteTaskValidation, removeTask);

// дополнительно
router.patch('/UpdateTask', updateTaskValidation, updateTask);
router.delete('/RemoveTask/:id', deleteTaskValidation, removeTask);

module.exports = router;
