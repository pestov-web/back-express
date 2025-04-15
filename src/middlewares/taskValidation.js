const { celebrate, Joi, Segments } = require('celebrate');

exports.updateTaskValidation = celebrate({
  [Segments.BODY]: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().max(255).required(),
    description: Joi.string().allow(null, '').max(512),
    categoryId: Joi.number().allow(null),
  }),
});
exports.createTaskValidation = celebrate({
  [Segments.BODY]: Joi.object({
    id: Joi.number().allow(null, ''),
    name: Joi.string().max(255).required(),
    description: Joi.string().allow(null, '').max(512),
    categoryId: Joi.number().allow(null),
  }),
});

exports.deleteTaskValidation = celebrate({
  [Segments.PARAMS]: Joi.object({
    id: Joi.number().integer().required(),
  }),
});
