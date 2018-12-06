import jwt from 'jsonwebtoken';
import { constants } from '../resources';
import { AuthorizationError } from './errors';
import errorHandler from './errorHandler';

function isAuthenticated(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) return next(new AuthorizationError('token_not_provided'));

  const [bearer, token] = authorization.split(' ');

  if (bearer === 'Bearer' && token) {
    jwt.verify(token, constants.AUTH_SECRET, (err, decoded) => {
      if (err) return next(new AuthorizationError('token_not_valid'));

      req.userId = decoded.userId;

      return next();
    });
  } else {
    return next(new AuthorizationError('token_should_bearer'));
  }
}

function generateToken(userId) {
  return jwt.sign({ userId }, constants.AUTH_SECRET);
}

export {
  isAuthenticated,
  generateToken,
};