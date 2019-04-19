import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import UserModel from '../schemas/user-model';

const hashPassword = ( pw ) => {
  const saltRounds = 10;
  return bcrypt.hash(pw, saltRounds);
};

const setUserReturn = (user, pw) => ({
  username: user.username,
  password: pw,
  name: user.name,
  friends: user.friends,
  setting: user.setting,
});

const registerUser = async ( input ) => {
  // let userOutput;
  const user = input.userInput;
  const hashedPassword = await hashPassword(user.password);

  return await UserModel.create({ // remove await here??
    _id: new mongoose.Types.ObjectId(),
    username: user.username,
    password: hashedPassword,
    name: user.name,
    setting: user.setting,
  }).then((user) => user);

  // }).then((user) => {
  //   userOutput = setUserReturn(user, hashedPassword)
  // });

  // return userOutput;
};

export default registerUser;
