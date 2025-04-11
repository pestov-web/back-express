const router = require('express').Router();

const {
  updateCategoryValidation,
  createCategoryValidation,
  deleteCategoryValidation,
} = require('../middlewares/categoryValidation');

const {
  addCategory,
  updateCategory,
  removeCategory,
  getCategories,
} = require('../controllers/categoryController');

router.get('/GetCategories', getCategories);
router.post('/AddCategory', createCategoryValidation, addCategory);
// Странная реализация в исходом апи, заменил ниже на PATCH, этот тоже оставил
router.post('/UpdateCategory', updateCategoryValidation, updateCategory);
// Странная реализация в исходом апи, заменил ниже на DELETE, этот тоже оставил
router.get('/RemoveCategory/:id', deleteCategoryValidation, removeCategory);

// дополнительно
router.patch('/UpdateCategory', updateCategoryValidation, updateCategory);
router.delete('/RemoveCategory/:id', deleteCategoryValidation, removeCategory);

module.exports = router;
