import { celebrate, Joi, Segments } from 'celebrate';

const updateCategoryValidation = celebrate({
  [Segments.BODY]: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().max(255).required(),
    description: Joi.string().allow(null, '').max(512),
  }),
});
const createCategoryValidation = celebrate({
  [Segments.BODY]: Joi.object({
    id: Joi.number().allow(null, ''),
    name: Joi.string().max(255).required(),
    description: Joi.string().allow(null, '').max(512),
  }),
});

const deleteCategoryValidation = celebrate({
  [Segments.PARAMS]: Joi.object({
    id: Joi.number().integer().required(),
  }),
});

export {
  updateCategoryValidation,
  createCategoryValidation,
  deleteCategoryValidation,
};
