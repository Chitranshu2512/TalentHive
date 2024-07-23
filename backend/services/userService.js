import User from '../models/User.js';

const getUserById = async (id) => {
  const user = await User.findById(id).select('-password');
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

export { getUserById };
