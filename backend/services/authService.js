import User from '../models/User.js';
import bcrypt from 'bcryptjs';
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

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log('Hashed password:', hashedPassword);

    user = new User({ name, email, password: hashedPassword });
    await user.save();

    const payload = {
      user: { id: user.id },
    };

    jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error('Error during registration:', err.message);
    res.status(500).send('Server error');
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("usernot found");
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    console.log('Stored hashed password:', user.password);
    console.log('Plain text password (provided):', password);

    // Detailed comparison process with error handling
    let isMatch;
    try {
      isMatch = await bcrypt.compare(password, user.password);
    } catch (compareError) {
      console.error('Error during password comparison:', compareError.message);
      return res.status(500).json({ msg: 'Server error during password comparison' });
    }

    console.log('Password comparison result:', isMatch);

    if (!isMatch) {
      console.log('Password does not match');
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: { id: user.id },
    };

    jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error('Error during login:', err.message);
    res.status(500).send('Server error');
  }
};
