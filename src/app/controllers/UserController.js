import jwt from 'jsonwebtoken';

import configAuth from '../../config/auth';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } });

    if (userExist) {
      return res.status(401).json({ error: 'User already exists' });
    }

    const userData = await User.create(req.body);

    const token = await jwt.sign({ id: userData.id }, configAuth.secret, {
      expiresIn: configAuth.expiresIn,
    });

    await userData.update({ token });

    return res.json(userData);
  }

  async get(req, res) {
    const { user_id } = req.params;
    const authHeader = req.headers.authorization;
    const [, token] = authHeader.split(' ');

    const user = await User.findOne({ where: { id: user_id } });

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

export default new UserController();
