import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import UserModel from '../schemas/user-model';

const hashPassword = ( pw ) => {
  const saltRounds = 10;
  return bcrypt.hash(pw, saltRounds);
};

const registerUser = async ( input ) => {
  const { username, password } = input.registrationInput;

  let usernameTaken;
  await UserModel.find({}, (err, users) => {
    usernameTaken = users.some((userBoi) => userBoi.username === username)
  });

  if (usernameTaken) return {
    message:'That username is already taken, please choose again.',
    username,
  };

  const hashedPassword = await hashPassword(password);
  const token = jwt.sign({ username }, 'tempi is a dog');

  const userResult = await UserModel.create({
    _id: new mongoose.Types.ObjectId(),
    username: username,
    password: hashedPassword,
    message: 'Placeholder message'
  });

  userResult.save();
  return {
    message: 'User created successfully!',
    token,
    username,
  }
};

export default registerUser;
