"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await _User2.default.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User does not exist' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const token = await _jsonwebtoken2.default.sign({ id: user.id }, _auth2.default.secret, {
      expiresIn: _auth2.default.expiresIn,
    });

    const login_at = Date.now();

    await user.update({ login_at, token });

    return res.json(user);
  }
}

exports. default = new SessionController();
