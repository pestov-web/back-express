const router = require('express').Router();

const {
  updateCategoryValidation,
  createCategoryValidation,
  deleteCategoryValidation,
} = require('../middlewares/categoryValidation');

router.get('/GetCategories', (req, res) => {
  res.send('GetCategories');
});
router.post('/AddCategory', createCategoryValidation, (req, res) => {
  res.send('CreateCategory');
});
// Странная реализация в исходом апи, заменил ниже на PATCH, этот тоже оставил
router.post('/UpdateCategory', updateCategoryValidation, (req, res) => {
  res.send('UpdateCategory');
});
// Странная реализация в исходом апи, заменил ниже на DELETE, этот тоже оставил
router.get('/RemoveCategory', deleteCategoryValidation, (req, res) => {
  res.send('DeleteCategory');
});

// дополнительно реализовал
router.patch('/UpdateCategory', updateCategoryValidation, (req, res) => {
  res.send('UpdateCategory');
});

router.delete('/RemoveCategory', deleteCategoryValidation, (req, res) => {
  res.send('DeleteCategory');
});

module.exports = router;
