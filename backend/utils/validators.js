import { body } from 'express-validator';

const validateRegister = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please include a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

const validateLogin = [
  body('email').isEmail().withMessage('Please include a valid email'),
  body('password').exists().withMessage('Password is required'),
];

export { validateRegister, validateLogin };
