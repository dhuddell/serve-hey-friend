import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import UserModel from '../schemas/user-model';

const hashPassword = ( pw ) => {
  const saltRounds = 10;
  return bcrypt.hash(pw, saltRounds);
};

const registerUser = async ( input ) => {
  const user = input.userInput;

  let usernameTaken;
  await UserModel.find({}, (err, users) => {
    usernameTaken = users.some((userBoi) => userBoi.username === user.username)
  });

  if (usernameTaken) throw new Error('Username taken!');
  const hashedPassword = await hashPassword(user.password);

  return UserModel.create({
    _id: new mongoose.Types.ObjectId(),
    username: user.username,
    password: hashedPassword,
    name: user.name,
    setting: user.setting,
  }).then((user) => user);
};

export default registerUser;
