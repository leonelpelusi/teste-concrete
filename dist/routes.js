"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);

const routes = new (0, _express.Router)();

routes.post('/sessions', _SessionController2.default.store);

routes.post('/users', _UserController2.default.store);
routes.get('/users/:user_id', _UserController2.default.get);

exports. default = routes;
