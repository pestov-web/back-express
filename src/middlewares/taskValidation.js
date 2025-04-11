const { celebrate, Joi, Segments } = require('celebrate');

exports.updateTaskValidation = celebrate({
  [Segments.BODY]: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().max(255).required(),
    description: Joi.string().max(512),
    categoryId: Joi.number(),
  }),
});
exports.createTaskValidation = celebrate({
  [Segments.BODY]: Joi.object({
    name: Joi.string().max(255).required(),
    description: Joi.string().max(512),
    categoryId: Joi.number(),
  }),
});

exports.deleteTaskValidation = celebrate({
  [Segments.PARAMS]: Joi.object({
    id: Joi.number().integer().required(),
  }),
});
