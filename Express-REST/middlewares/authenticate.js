import jwt from 'jsonwebtoken';
import config from '../config/index.js';

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
function authenticate(req, res, next) {
  const token = req.headers.authorization?.slice(7); // Remove "Bearer " prefix

  if (token && jwt.verify(token, config.jwtSecret)) {
    return next();
  }

  res.statusCode = 401;
  res.json({
    msg: 'Unauthorized',
  });
}

export default authenticate;
