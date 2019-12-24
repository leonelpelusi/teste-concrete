import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/teste', (req, res) => {
  return res.json({ message: "ok" });
});

routes.use(authMiddleware);

routes.get('/users/:user_id', UserController.get);
export default routes;
