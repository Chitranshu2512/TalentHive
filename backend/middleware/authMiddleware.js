import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from the header
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret'); // Verify the token
    req.user = decoded.user; // Attach user info to the request object
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default authMiddleware;
