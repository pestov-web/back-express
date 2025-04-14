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
router.patch('/UpdateCategory', updateCategoryValidation, updateCategory);
router.delete('/RemoveCategory/:id', deleteCategoryValidation, removeCategory);

// Оставил эндпоинты из исходного апи
router.post('/UpdateCategory', updateCategoryValidation, updateCategory);
router.get('/RemoveCategory/:id', deleteCategoryValidation, removeCategory);

module.exports = router;
