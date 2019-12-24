"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _joi = require('joi'); var _joi2 = _interopRequireDefault(_joi);

const schemaUser = _joi2.default.object({
 name: _joi2.default.string().required(),
 email: _joi2.default.string().required(),
 password_hash: _joi2.default.string().required(),
 phones: _joi2.default.array().items(_joi2.default.object({
   number: _joi2.default.string().integer().positive().required(),
   ddd: _joi2.default.string().integer().positive().required(),
 })),
 token: _joi2.default.string().required()
}).required();