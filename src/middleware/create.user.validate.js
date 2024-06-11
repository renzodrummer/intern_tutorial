const Joi = require('joi')

const validator = require('express-joi-validation').createValidator({})

const validateCreateUser = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
})

module.exports = { validator, validateCreateUser }