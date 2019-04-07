import bcrypt from 'bcrypt';
import { User } from '../models';

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

const createUser = async ( input ) => {
  let userOutput;
  const user = input.userInput;
  const hashedPassword = await hashPassword(user.password);

  await User.create({
    username: user.username,
    password: hashedPassword,
    name: user.name,
    friends: user.friends,
    setting: user.setting,
  }).then(() => {
    userOutput = setUserReturn(user, hashedPassword)
  });

  return userOutput;
};

export default createUser;
