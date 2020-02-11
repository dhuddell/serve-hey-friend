import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import UserModel from '../schemas/user-model';

const hashPassword = ( pw ) => {
  const saltRounds = 10;
  return bcrypt.hash(pw, saltRounds);
};

const registerUser = async ( input ) => {
  const user = input.registrationInput;

  console.log(input)
  let usernameTaken;
  await UserModel.find({}, (err, users) => {
    usernameTaken = users.some((userBoi) => userBoi.username === user.username)
  });

  if (usernameTaken) return {
    code: '200',
    success: false,
    message:'That username is already taken, please choose again.',
    username: user.username
  };

  const hashedPassword = await hashPassword(user.password);

  const userResult = await UserModel.create({
    _id: new mongoose.Types.ObjectId(),
    username: user.username,
    password: hashedPassword,
    message: 'Placeholder message'
  });

  const token = jwt.sign({ foo: 'bar' }, 'tempi is a dog');
  return {
    code: '200',
    success: true,
    message: 'User created successfully!',
    token,
    username: user.username,
  }
};

export default registerUser;
