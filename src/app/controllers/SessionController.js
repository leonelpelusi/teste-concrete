import jwt from 'jsonwebtoken';

import User from '../models/User';
import configAuth from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'Username does not exist' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(400).json({ error: 'Username and/or Password does not match' });
    }

    const token = await jwt.sign({ id: user.id }, configAuth.secret, {
      expiresIn: configAuth.expiresIn,
    });

    const login_at = Date.now();

    await user.update({ login_at, token });

    return res.status(200).json(user);
  }
}

export default new SessionController();
