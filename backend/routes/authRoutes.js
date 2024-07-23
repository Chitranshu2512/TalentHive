// routes/auth.js

import express from 'express';
import { registerUser, loginUser, getUserDetails } from '../controllers/userController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', auth, getUserDetails);

export default router;
