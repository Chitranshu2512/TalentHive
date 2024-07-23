import jwt from 'jsonwebtoken';
import config from '../config/config.js';

const generateToken = (user) => {
  const payload = { user: { id: user.id } };
  return jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
};

export { generateToken };
