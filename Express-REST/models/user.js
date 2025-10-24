// import { v4 as uuid } from 'uuid';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import config from '../config/index.js';

// const tokens = ['d4973653-9895-4123-a7dd-3e1387d0fbde'];

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

// const user = {
//   username: 'romain',
//   password: '123456',
// };

/**
 *
 * @param {object} credentials
 * @param {string} credentials.username
 * @param {string} credentials.password
 */
async function login(credentials) {
  const user = await User.findOne({ username: credentials.username, password: credentials.password });

  if (!user) {
    return null;
  }

  const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' });
  return token;
}

async function createUser(userData) {
  const user = new User(userData);
  await user.save();
  return user;
}

export { login, createUser };
