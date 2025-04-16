import { celebrate, Joi, Segments } from 'celebrate';

const updateTaskValidation = celebrate({
  [Segments.BODY]: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().max(255).required(),
    description: Joi.string().allow(null, '').max(1536),
    categoryId: Joi.number().allow(null),
  }),
});
const createTaskValidation = celebrate({
  [Segments.BODY]: Joi.object({
    id: Joi.number().allow(null, ''),
    name: Joi.string().max(255).required(),
    description: Joi.string().allow(null, '').max(1536),
    categoryId: Joi.number().allow(null),
  }),
});

const deleteTaskValidation = celebrate({
  [Segments.PARAMS]: Joi.object({
    id: Joi.number().integer().required(),
  }),
});

export { updateTaskValidation, createTaskValidation, deleteTaskValidation };
