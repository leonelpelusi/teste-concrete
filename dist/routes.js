"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _auth = require('./app/middleware/auth'); var _auth2 = _interopRequireDefault(_auth);

const routes = new (0, _express.Router)();

routes.post('/users', _UserController2.default.store);
routes.post('/sessions', _SessionController2.default.store);
routes.post('/teste', (req, res) => {
  return res.json({ message: "ok" });
});

routes.use(_auth2.default);

routes.get('/users/:user_id', _UserController2.default.get);
exports. default = routes;
