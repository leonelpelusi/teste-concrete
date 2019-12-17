import Joi from 'joi';

const schemaUser = Joi.object({
 name: Joi.string().required(),
 email: Joi.string().required(),
 password_hash: Joi.string().required(),
 phones: Joi.array().items(Joi.object({
   number: Joi.string().integer().positive().required(),
   ddd: Joi.string().integer().positive().required(),
 })),
 token: Joi.string().required()
}).required();