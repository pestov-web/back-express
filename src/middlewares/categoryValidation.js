const { celebrate, Joi, Segments } = require('celebrate');

exports.updateCategoryValidation = celebrate({
  [Segments.BODY]: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().max(255).required(),
    description: Joi.string().max(512),
  }),
});
exports.createCategoryValidation = celebrate({
  [Segments.BODY]: Joi.object({
    name: Joi.string().max(255).required(),
    description: Joi.string().max(512),
  }),
});

exports.deleteCategoryValidation = celebrate({
  [Segments.PARAMS]: Joi.object({
    id: Joi.number().integer().required(),
  }),
});
