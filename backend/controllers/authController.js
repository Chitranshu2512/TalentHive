import User from '../models/User.js';
import bcrypt from 'bcrypt'; // Ensure only bcrypt is used
import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    console.log('Plain text password (before hashing):', password);

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hashedPassword);

    user = new User({ name, email, password: password });
    await user.save();

    const payload = {
      user: { id: user.id },
    };

    jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error('Server error during registration:', err.message);
    res.status(500).send('Server error');
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    console.log('Stored user data:', user);

    // Debug: Compare password with stored hash
    console.log('Plain text password (provided):', password);
    console.log('Stored hashed password:', user.password);

    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = password;
    console.log('Password comparison result:', isMatch);

    if (!isMatch) {
      console.log('Password does not match');
      return res.status(400).json({ msg: 'Invalid credentialsa' });
    }

    const payload = {
      user: { id: user.id, name: user.name },
    };

    jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error('Server error during login:', err.message);
    res.status(500).send('Server error');
  }
};
