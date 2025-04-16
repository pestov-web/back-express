import express from 'express';
const router = express.Router();

import {
  updateCategoryValidation,
  createCategoryValidation,
  deleteCategoryValidation,
} from '../middlewares/categoryValidation';

import {
  addCategory,
  updateCategory,
  removeCategory,
  getCategories,
} from '../controllers/category.controller';

router.get('/GetCategories', getCategories);
router.post('/AddCategory', createCategoryValidation, addCategory);
router.patch('/UpdateCategory', updateCategoryValidation, updateCategory);
router.delete('/RemoveCategory/:id', deleteCategoryValidation, removeCategory);

// Оставил эндпоинты из исходного апи
router.post('/UpdateCategory', updateCategoryValidation, updateCategory);
router.get('/RemoveCategory/:id', deleteCategoryValidation, removeCategory);

export default router;
