"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    const userExist = await _User2.default.findOne({ where: { email: req.body.email } });

    if (userExist) {
      return res.status(400).json({ error: 'E-mail already exists' });
    }

    const userData = await _User2.default.create(req.body);

    const token = await _jsonwebtoken2.default.sign({ id: userData.id }, _auth2.default.secret, {
      expiresIn: _auth2.default.expiresIn,
    });

    await userData.update({ token });

    return res.json(userData);
  }

  async get(req, res) {
    const { user_id } = req.params;
    const authHeader = req.headers.authorization;
    const [, token] = authHeader.split(' ');

    if (!token) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    const user = await _User2.default.findOne({ where: { id: user_id } });

    if (token !== user.token) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    const data1 = new Date();
    const data2 = user.login_at;

    if (data1 - data2 > 1800000) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    return res.json(user);
  }
}

exports. default = new UserController();
