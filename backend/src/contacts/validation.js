const Joi = require("joi");

const contactValidation = Joi.object({
  lastName: Joi.string().required(),
  firstName: Joi.string().required(),
  address: Joi.string().required(),
  id: Joi.string()
    .guid({
      version: ["uuidv4", "uuidv5"],
    })
    .allow(null),
});

module.exports = contactValidation;
