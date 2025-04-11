const router = require('express').Router();

const {
  updateTaskValidation,
  createTaskValidation,
  deleteTaskValidation,
} = require('../middlewares/taskValidation');

router.get('/GetTasks', (req, res) => {
  res.send('GetTasks');
});
router.post('/AddTask', createTaskValidation, (req, res) => {
  res.send('CreateTask');
});
// Странная реализация в исходом апи, заменил ниже на PATCH, этот тоже оставил
router.post('/UpdateTask', updateTaskValidation, (req, res) => {
  res.send('UpdateTask');
});
// Странная реализация в исходом апи, заменил ниже на DELETE, этот тоже оставил
router.get('/RemoveTask/:id', deleteTaskValidation, (req, res) => {
  res.send('DeleteTask' + ' ' + req.params.id);
});

// дополнительно реализовал
router.patch('/UpdateTask', updateTaskValidation, (req, res) => {
  res.send('UpdateTask');
});
router.delete('/RemoveTask/:id', deleteTaskValidation, (req, res) => {
  res.send('DeleteTask');
});

module.exports = router;
